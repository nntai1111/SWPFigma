import React, { useEffect } from 'react';
import SildebarManager from '../../components/Manager/SildebarLeftManager';
import { RiAccountCircleLine } from "react-icons/ri";
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import DiamondManager from './Product/DiamondManager';
export default function Manager() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const Authorization = localStorage.getItem('token');
    //     const role = localStorage.getItem('role');
    //     if (!Authorization || role !== 'manager') {
    //         navigate('/login');
    //     }
    // }, [navigate]);
    useEffect(() => {
        const user = {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Im1hbmFnZXJfdXNlcjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJtYW5hZ2VyIiwiZXhwIjoxNzIxMzMwOTU1LCJpc3MiOiJodHRwczovL2pzc2F0c3Byb2plY3QuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9qc3NhdHNwcm9qZWN0LmF6dXJld2Vic2l0ZXMubmV0LyJ9.8qCpt5QIiJY9tuXSBkntppUuIuMg2pOeyVikjKgRq7E',
            role: 'manager',
            staffId: 2,
            name: '	Jane Smith'
        };

        localStorage.setItem('token', user.token);
        localStorage.setItem('role', user.role);
        localStorage.setItem('staffId', user.staffId);
        localStorage.setItem('name', user.name);
    }, []);
    return (
        <>
            <div className='w-full flex h-[100vh] bg-gray-100'>
                <div className='w-[240px] h-[100vh] flex-none bg-white overflow-y-auto z-20 border border-gray-300'>
                    <SildebarManager />
                </div>
                <div className='flex-auto border overflow-y-auto '>
                    <div className=''>
                        <div className='fixed top-0 left-0 w-full flex justify-end space-x-2 px-[30px] py-[5px] bg-white border border-gray-300 z-10'>
                            <RiAccountCircleLine className='text-2xl text-blue-800' />
                            <span className='text-blue-800 text-lg font-medium'>{localStorage.getItem('name')} (Manager)</span>
                        </div>
                        <div className='pt-[60px]'>
                            <Outlet />
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
