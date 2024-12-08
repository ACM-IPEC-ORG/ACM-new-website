import React from 'react'
import { useAuth } from '../../Context/AuthContext'

function Admin() {
  const { user } = useAuth()
  return (
    <div className='grid place-items-center py-12'>
      <h1 className='text-3xl font-bold'>Hello, {user?.name}</h1>
      <p>In here you can update website data</p>
      <div className='w-full h-full'>
        <SortableTable />
      </div>
    </div>
  )
}

export default Admin





import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaAddressCard, FaUserPlus } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";
import { BsPencil } from "react-icons/bs";
import { FETCH_EVENT_ROUTE, FETCH_TEAM_ROUTE } from '../../services/constant'
import { act } from 'react'

const TABS = [
  { label: "Team", value: "team" },
  { label: "Events", value: "events" },
  { label: "Gallery", value: "gallery" },
];

const TABLE_HEAD_TEAM = ["Member", "Name", "Designation", "Department", "Social Links","Edit"];
const TABLE_HEAD_EVENT = ["Poster","Title", "Description", "Info", "Tagline","TS","session","rules","winners","instagram_post","Edit"];

export function SortableTable() {
  const [activeTab, setActiveTab] = useState("team");
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTableData = async (tab) => {
    setLoading(true); // Show loader while data is being fetched
    let response;

    try {
      console.log(tab)
      if (tab === "team") {
        response = await axios.get(FETCH_TEAM_ROUTE);
      } else if (tab === "events") {
        response = await axios.get(FETCH_EVENT_ROUTE);
      } else {
        console.warn("Unhandled tab value:", tab);
        setTableRows([]); // Set an empty table if tab is unrecognized
        return;
      }

      if (response?.data) {
        setTableRows(response.data.data); // Update table rows with fetched data
      } else {
        console.warn("No data received from the server");
      }
    } catch (error) {
      console.error("Error fetching table data:", error.message);
    } finally {
      console.log(tableRows)
      setLoading(false); // Hide loader after fetching completes
    }
  };

  useEffect(() => {
    console.log("INSIDE USEEFFECT")
    fetchTableData(activeTab);
  }, [activeTab]);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Dashboard Content List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all data on the website
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3 bg-primary/60 hover:bg-primary text-white py-4" size="sm">
              <FaUserPlus strokeWidth={2} className="h-4 w-4" /> Add Member
            </Button>
            <Button className="flex items-center gap-3 bg-primary/60 hover:bg-primary text-white py-4" size="sm">
              <FaAddressCard strokeWidth={2} className="h-4 w-4" /> Add Event
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="bg-gray-100 rounded-lg p-1 w-full md:w-max">
        {TABS.map(({ label, value }) => (
          <button
            key={value}
            className={`tab font-semibold transition ease-in-out${
              activeTab === value ? 'active bg-white rounded-lg underline decoration-wavy text-primary underline-offset-4' : ''
            } px-4 py-2`}
            onClick={() => setActiveTab(value)}
          >
            {label}
          </button>
        ))}
      </div>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<RxMagnifyingGlass className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 grid place-items-center">
        {loading ? (
          <Typography variant="small" color="blue-gray" className="text-center py-4">
            Loading...
          </Typography>
        ) : (
          <>
          {activeTab=="team"&&<table className="mt-4 w-96 min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD_TEAM.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD_TEAM.length - 1 && (
                        <LuChevronsUpDown strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {tableRows.length!=0?tableRows.map(({ img, fullName,social_links, email,designation,position, department, instagram, linkedIn, edit }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {fullName}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                    <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal capitalize">
                          {position}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                    <div className="flex flex-col">
                    <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                          {department}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {social_links}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <BsPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }):(
                <div className='w-full grid place-items-center'>
                  <p className='text-sm py-4'>No Data is Available for Team ...</p>
                </div>
              )}
            </tbody>
          </table>}
          {activeTab=="events"&&<table className="mt-4 w-[50vw] overflow-x-scroll w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD_EVENT.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD_EVENT.length - 1 && (
                        <LuChevronsUpDown strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {tableRows.length!=0?tableRows.map(({ poster,title, description ,info, tagline,TS,session,rules,winners,instagram_post,edit}, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar variant='square' src={poster} alt={name} size="sm" />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                            {title}
                          </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col w-72">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {description}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col w-72">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {info}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="w-52 font-normal">
                        {tagline}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="w-32 font-normal">
                        {TS}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="w-32 font-normal">
                        {session}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="w-[40vw] font-normal">
                        {rules}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="w-32 font-normal">
                        {winners}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="w-32 font-normal">
                        {instagram_post}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <BsPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }):(
                <div className='w-full grid place-items-center'>
                  <p className='text-sm py-4'>No Data is Available for Events ...</p>
                </div>
              )}
            </tbody>
          </table>}
          {/* {activeTab=="gallery"&&<table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <LuChevronsUpDown strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.length!=0&&tableRows.HODs.map(({ img, name, email,designation, department, instagram, linkedIn, edit }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {name}
                          </Typography>
                          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {designation}
                        </Typography>
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                          {department}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {instagram}
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {linkedIn}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <BsPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
              {tableRows.length!=0&&tableRows.Conveyners.map(({ img, name, email,designation, department, instagram, linkedIn, edit }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {name}
                          </Typography>
                          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {designation}
                        </Typography>
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                          {department}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {instagram}
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {linkedIn}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <BsPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
               {tableRows.length!=0&&tableRows.Primes.map(({ img, name, email,designation, department, instagram, linkedIn, edit }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {name}
                          </Typography>
                          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {designation}
                        </Typography>
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                          {department}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {instagram}
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {linkedIn}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <BsPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
              {tableRows.length!=0&&tableRows.Cores.map(({ img, name, email,designation, department, instagram, linkedIn, edit }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {name}
                          </Typography>
                          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {designation}
                        </Typography>
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                          {department}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {instagram}
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {linkedIn}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <BsPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>} */}
          </>
          
        )}
      </CardBody>
      <CardFooter className="grid place-items-center border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="py-2 font-normal ">
          Page 1 of 10
        </Typography>
      </CardFooter>
    </Card>
  );
}
