import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { createConnection } from '../../../store/connections';
import { toast, useToast } from 'react-toastify';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    type: yup.string().required('Type is required'),
    
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
  const [connectionType, setConnectionType] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.connections);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (status === 'success') {
      toast.success('Connection created successfully');
    }
    if(status === 'failed') {
      // Handle error
      toast.error(error);
    }
  }, [status]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createConnection(data));
  };

  const type = watch('type'); // Watch the 'type' field for dynamic rendering
    
  // useEffect to update connectionType based on selected type
  useEffect(() => {
    setConnectionType(type);
  }, [type]); // This will update connectionType whenever type changes
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
    >
      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          {...register('name')}
          type="text"
          className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} 
            rounded w-full py-2 px-3 text-gray-700`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Type */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Type</label>
        <select
          {...register('type')}
          onChange={(e) => setConnectionType(e.target.value)}
          className={`border ${errors.type ? 'border-red-500' : 'border-gray-300'} 
            rounded w-full py-2 px-3 text-gray-700`}
        >
          <option value="">Select Type</option>
          <option value="excel">Excel</option>
          <option value="csv">CSV</option>
          <option value="database">Database</option>
        </select>
        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
      </div>

      {/* File Input (only for Excel or CSV) */}
      {connectionType === 'excel' || connectionType === 'csv' ? (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">File</label>
          <input
            {...register('file')}
            type="file"
            className={`border ${errors.file ? 'border-red-500' : 'border-gray-300'} 
              rounded w-full py-2 px-3 text-gray-700`}
          />
          {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>}
        </div>
      ) : null}

      {/* Database Fields (only for Database type) */}
      {connectionType === 'database' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Database URL</label>
            <input
              {...register('dbUrl')}
              type="text"
              className={`border ${errors.dbUrl ? 'border-red-500' : 'border-gray-300'} 
                rounded w-full py-2 px-3 text-gray-700`}
            />
            {errors.dbUrl && <p className="text-red-500 text-sm mt-1">{errors.dbUrl.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Auth Type</label>
            <input
              {...register('authType')}
              type="text"
              className={`border ${errors.authType ? 'border-red-500' : 'border-gray-300'} 
                rounded w-full py-2 px-3 text-gray-700`}
            />
            {errors.authType && <p className="text-red-500 text-sm mt-1">{errors.authType.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              {...register('username')}
              type="text"
              className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} 
                rounded w-full py-2 px-3 text-gray-700`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              {...register('password')}
              type="password"
              className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} 
                rounded w-full py-2 px-3 text-gray-700`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
        </>
      )}

      {/* Logo (Optional) */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Logo</label>
        <input
          {...register('logo')}
          type="file"
          className={`border ${errors.logo ? 'border-red-500' : 'border-gray-300'} 
            rounded w-full py-2 px-3 text-gray-700`}
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ConnectionForm;
