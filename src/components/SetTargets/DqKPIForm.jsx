import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Radio, RadioGroup, Switch } from "@headlessui/react";
import { useState } from "react";
import CustomDatePicker from "../common/CustomDatePicker";
import { classNames } from "../../utils/utils";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

const layersOptions = [
  { name: "MONTHLY", inStock: true },
  { name: "QUATERLY", inStock: true },
  { name: "YEARLY", inStock: true },
];

const kpiTypeOptions = [
  { name: "COMPLETENESS", inStock: true },
  { name: "CONSISTENCY", inStock: true },
  { name: "REF_INTEGRITY", inStock: true },
];

const kpiLevelOptions = [
  { name: "REPORTING_AGENT", inStock: true },
  { name: "OBSERVED_AGENT", inStock: true },
  { name: "BOOKING_OFFICE", inStock: true },
  { name: "SYSTEM_RULE", inStock: true },
];


export default function DqKPIForm() {
  const [enabled, setEnabled] = useState(false);
  const [kpiTrackingFreq, setkpiTrackingFreq] = useState(layersOptions[2]);
  const [kpiType, setKpiType] = useState(kpiTypeOptions[2]);

  const {register,handleSubmit,watch,formState : {errors}} = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("kpiTrackingFreq"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add New DQ KPIs
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="kpiId"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                KPI ID
              </label>
              <div className="mt-2">
                <input
                  id="kpiId"
                  // name="kpiId"
                  type="text"
                  {...register("kpiId",{required:true , message:"This field is required heya"})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.kpiId && <span>This field is required</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="kpiName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                KPI Name
              </label>
              <div className="mt-2">
                <input
                  id="kpiName"
                  type="text"
                  {...register("kpiName",{required:true})}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.kpiName && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-span-full">
              <fieldset aria-label="Choose a memory option">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    Processing Layer:
                  </div>
                </div>

                <RadioGroup
                  value={kpiTrackingFreq}
                  onChange={setkpiTrackingFreq}
                  // {...register('kpiTrackingFreq')}
                  className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6"
                >
                  {layersOptions.map((option) => (
                    <Radio
                      key={option.name}
                      value={option}
                      disabled={!option.inStock}
                      className={classNames(
                        option.inStock
                          ? "cursor-pointer focus:outline-none"
                          : "cursor-not-allowed opacity-25",
                        "flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset"
                      )}
                    >
                      {option.name}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
            <div className="sm:col-span-3 sm:col-start-1">
              <fieldset aria-label="Choose a memory option">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    KPI Type
                  </div>
                </div>

                <RadioGroup
                  value={kpiType}
                  onChange={setKpiType}
                  className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-3"
                >
                  {kpiTypeOptions.map((option) => (
                    <Radio
                      key={option.name}
                      value={option}
                      disabled={!option.inStock}
                      className={classNames(
                        option.inStock
                          ? "cursor-pointer focus:outline-none"
                          : "cursor-not-allowed opacity-25",
                        "flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset"
                      )}
                    >
                      {option.name}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="kpiOwner"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                KPI Owner
              </label>
              <div className="mt-2">
                <input
                  id="kpiOwner"
                  {...register("kpiOwner",{required:true})}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.kpiOwner && <span>This field is required</span>}
            </div>

            <div className="col-span-full">
              <fieldset aria-label="Choose a memory option">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    KPI Level:
                  </div>
                </div>

                <RadioGroup
                  // value={mem}
                  // onChange={setMem}
                  className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-4"
                >
                  {kpiLevelOptions.map((option) => (
                    <Radio
                      key={option.name}
                      value={option}
                      disabled={!option.inStock}
                      className={classNames(
                        option.inStock
                          ? "cursor-pointer focus:outline-none"
                          : "cursor-not-allowed opacity-25",
                        "flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset"
                      )}
                    >
                      {option.name}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="kpiObject"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                KPI Object
              </label>
              <div className="mt-2">
                <input
                  id="kpiObject"
                  {...register("kpiObject",{required:true})}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.kpiObject && <span>This field is required</span>}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="kpiTargetValue"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                KPI Target Value
              </label>
              <div className="mt-2">
                <input
                  id="kpiTargetValue"
                  {...register("kpiTargetValue",{required:true})}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.kpiTargetValue && <span>This field is required</span>}
            </div>

        

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Active
              </label>
              <div className="mt-2">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                  />
                </Switch>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Valid From
              </label>
              <div className="mt-2">
                <CustomDatePicker />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Valid To
              </label>
              <div className="mt-2">
                <CustomDatePicker />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="reasonForDeactivation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason For Deactivation
              </label>
              <div className="mt-2">
                <textarea
                  id="reasonForDeactivation"
                  {...register("reasonForDeactivation")}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enter reason if existing rule is deactivated
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
