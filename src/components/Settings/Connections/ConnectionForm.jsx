import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createConnection,
  fetchConnectionById,
} from "../../../store/connections";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  type: yup.string().required("Type is required"),

  // file: yup
  //   .mixed()
  //   .when('type', {
  //     is: (value) => value === 'excel' || value === 'csv',
  //     then: yup.mixed().required('File is required'),
  //     otherwise: yup.mixed().nullable(), // if not excel or csv, file can be nullable
  //   }),

  // dbUrl: yup
  //   .string()
  //   .when('type', {
  //     is: 'database',
  //     then: yup.string().required('Database URL is required'),
  //     otherwise: yup.string().nullable(),
  //   }),

  // authType: yup
  //   .string()
  //   .when('type', {
  //     is: 'database',
  //     then: yup.string().required('Auth Type is required'),
  //     otherwise: yup.string().nullable(),
  //   }),

  // username: yup
  //   .string()
  //   .when('type', {
  //     is: 'database',
  //     then: yup.string().required('Username is required'),
  //     otherwise: yup.string().nullable(),
  //   }),

  // password: yup
  //   .string()
  //   .when('type', {
  //     is: 'database',
  //     then: yup.string().required('Password is required'),
  //     otherwise: yup.string().nullable(),
  //   }),

  logo: yup.mixed().nullable(), // Logo is optional, can remain nullable
});

const ConnectionForm = () => {
  const dispatch = useDispatch();
  const [connectionType, setConnectionType] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Toggle for view/edit mode

  const { id } = useParams(); // Get ID from route params

  const isDisabled = !isEditing && !!id; // Disable logic
  const disabledClass =
    !isEditing && !!id ? "bg-gray-100 cursor-not-allowed" : "";
  const { status, error, selectedData } = useSelector(
    (state) => state.connections
  );
  const {
    register,
    handleSubmit,
    watch,
    reset, // Reset form values
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   console.log('ConnectionForm mounted',status);
  //   if (status === 'success') {
  //     toast.success('Connection created successfully');
  //   }
  //   if(status === 'failed') {
  //     // Handle error
  //     toast.error(error);
  //   }
  // }, [status]);

  // Handle status changes (success or failure)
  useEffect(() => {
    if (status === "success") {
      toast.success(`${isEditing ? "Updated" : "Created"} successfully`);
      // onClose(); // Close the form after success
    } else if (status === "failed") {
      toast.error(error);
    }
  }, [status]);

  // Fetch connection data if ID is present (view/edit mode)
  useEffect(() => {
    if (id) {
      dispatch(fetchConnectionById(id));
    }
  }, [id, dispatch]);

  // Populate form fields when connection data is fetched
  useEffect(() => {
    if (selectedData && id) {
      reset(selectedData); // Populate form fields with connection data
    }
  }, [selectedData, id, reset]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData(); // Create FormData instance

      // Append form fields
      formData.append("name", data.name);
      formData.append("type", data.type);

      if (data.file && data.file[0]) {
        formData.append("file", data.file[0]); // Append file if present
      }

      if (data.logo && data.logo[0]) {
        formData.append("logo", data.logo[0]); // Append logo if present
      }

      // Append database fields conditionally
      if (data.type === "database") {
        formData.append("dbUrl", data.dbUrl);
        formData.append("authType", data.authType);
        formData.append("username", data.username);
        formData.append("password", data.password);
      }

      // Dispatch the action to create a connection
      await dispatch(createConnection(formData));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to upload files");
    }
    // dispatch(createConnection(data));
  };

  const type = watch("type"); // Watch the 'type' field for dynamic rendering

  // useEffect to update connectionType based on selected type
  useEffect(() => {
    setConnectionType(type);
  }, [type]); // This will update connectionType whenever type changes

  const handleDelete = (id) => {
    console.log("Delete connection with ID:", id);
  }

  const handleCancel = () => {
    // Clear the form (optional) and navigate away
    if(isEditing) {
      setIsEditing(false); // Exit edit mode
    }
    reset(); // Resets the form fields to their default values
    // Navigate back to the previous page (if using React Router)
    // history.goBack(); // Uncomment if you are using history for navigation
  };
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto bg-white p-6 shadow-md rounded-lg"
    >
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            {...register("name")}
            disabled={isDisabled} // Disable if not in edit mode
            type="text"
            className={`border rounded w-full py-2 px-3 text-gray-700 
            ${errors.name ? "border-red-500" : "border-gray-300"} 
            ${
              isDisabled
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "border-gray-300"
            } 
            `}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Type</label>
          <select
            {...register("type")}
            onChange={(e) => setConnectionType(e.target.value)}
            disabled={isDisabled}
            className={`border ${
              errors.type ? "border-red-500" : "border-gray-300"
            } 
            rounded w-full py-2 px-3 text-gray-700`}
          >
            <option value="">Select Type</option>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
            <option value="database">Database</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        {/* Render File if Available */}
        {selectedData?.fileUrl && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Uploaded File
            </label>
            <a
              href={selectedData.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View/Download File
            </a>
          </div>
        )}
        {/* File Input (only for Excel or CSV) */}
        {connectionType === "excel" || connectionType === "csv" ? (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">File</label>
            <input
              {...register("file")}
              type="file"
              disabled={isDisabled}
              className={`border ${
                errors.file ? "border-red-500" : "border-gray-300"
              } 
              rounded w-full py-2 px-3 text-gray-700`}
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
            )}
          </div>
        ) : null}

        {/* Database Fields (only for Database type) */}
        {connectionType === "database" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Database URL
              </label>
              <input
                {...register("dbUrl")}
                type="text"
                disabled={isDisabled}
                className={`border ${
                  errors.dbUrl ? "border-red-500" : "border-gray-300"
                } 
                rounded w-full py-2 px-3 text-gray-700 ${disabledClass}`}
              />
              {errors.dbUrl && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dbUrl.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Auth Type
              </label>
              <input
                {...register("authType")}
                type="text"
                disabled={isDisabled}
                className={`border ${
                  errors.authType ? "border-red-500" : "border-gray-300"
                } 
                rounded w-full py-2 px-3 text-gray-700 ${disabledClass}`}
              />
              {errors.authType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.authType.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                disabled={isDisabled}
                className={`border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } 
                rounded w-full py-2 px-3 text-gray-700 ${disabledClass}`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                disabled={isDisabled}
                className={`border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } 
                rounded w-full py-2 px-3 text-gray-700 ${disabledClass}`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </>
        )}

        {/* Render Logo if Available */}
        {selectedData?.logoUrl && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Logo</label>
            <img
              src={selectedData.logoUrl}
              alt="Connection Logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        )}

        {/* Logo (Optional) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Logo</label>
          <input
            {...register("logo")}
            type="file"
            disabled={isDisabled}
            className={`border ${
              errors.logo ? "border-red-500" : "border-gray-300"
            } 
            rounded w-full py-2 px-3 text-gray-700 ${disabledClass}`}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-1  gap-4 justify-end">
        {/* Delete Button in Top-Right Corner */}
      {id && (
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className="bg-red-500 text-white py-2 px-4 rounded 
                    hover:bg-red-700 shadow-lg"
        >
          Delete
        </button>
      )}
        {id && !isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
          >
            Edit
          </button>
        )}

        {(isEditing || !id) && (
          <>
          <button type="button" onClick={handleCancel} className="bg-gray-400 hover:bg-gray-500 py-2 px-4 rounded text-white">Cancel</button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {id ? "Update" : "Create"}
          </button>
          </>
        )}
        {/* Submit Button */}
      </div>
    </form>
  );
};

export default ConnectionForm;
