import { useState } from "react";
import DataProcessing from "../components/ControlFlow/DataProcessing/DataProcessing";
import GeneralOutput from "../components/ControlFlow/GeneralOutput/GeneralOutput";
import ViewRunLog from "../components/ControlFlow/RunLog/ViewRunLog";
import UploadFiles from "../components/ControlFlow/UploadFiles/UploadFiles";
import SimpleBar from "simplebar-react";
import { classNames } from "../utils/utils";

const initialTabs = [
  { name: 'Upload Files', href: '#', current: true , content: <UploadFiles /> },
  { name: 'Trigger Data Processing Tasks', href: '#', current: false, content: <DataProcessing /> },
  { name: 'General Output', href: '#', current: false , content: <GeneralOutput /> },
  { name: 'View Run Log', href: '#', current: false , content: <ViewRunLog />},
]



export default function ContorlFlow() {

  // const [currentTab, setCurrentTab] = useState(tabs.find((tab) => tab.current).name);

  // const handleTabClick = (tabName) => {
  //   setCurrentTab(tabName);
  // };
  const [tabs, setTabs] = useState(initialTabs);

  const handleTabClick = (tabName) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === tabName
          ? { ...tab, current: true }
          : { ...tab, current: false }
      )
    );
  };

  const currentTab = tabs.find((tab) => tab.current).name;

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          // defaultValue={tabs.find((tab) => tab.current).name}
          value={currentTab}
          onChange={(e) => handleTabClick(e.target.value)}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.name);
                }}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            tab.name === currentTab && (
              // <div key={tab.name} className="px-4 sm:px-6 lg:px-8">
              <div key={tab.name} className="px-3">
                <SimpleBar className='max-h-[65vh]'>
                {tab.content}
                </SimpleBar>
              </div>
            )
        )}
      </div>
    </div>
  )
}
