import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useGetBlobsQuery, useUploadFileMutation } from "../../../utils/apiSlice";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function UploadForm(props) {
  const { handleClose } = props;
  const [uploadFile, { isLoading, isError, isSuccess, error }] = useUploadFileMutation();
  const { refetch } = useGetBlobsQuery();
  const [file, setFile] = useState(null);
  const hasCalledHandleClose = useRef(false);
  console.log(isLoading, isError, isSuccess, error);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess && !hasCalledHandleClose.current) {
      toast.success("File uploaded successfully");
      handleClose();
      refetch();
      hasCalledHandleClose.current = true;
    }
  }, [isSuccess, handleClose]);
  const handleSubmit = async (e) => {
    console.log("File", file);
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    try {
        await uploadFile(formData).unwrap();
        setFile(null);
    } catch (err) {
        console.error('Failed to create post: ', err);
    }
};
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Upload Files
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              {/* <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label> */}
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          disabled={isLoading}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
