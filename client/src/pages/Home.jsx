import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { clearErrors, getAllData, sendDataByEmail } from '../actions/ProductAction';
import Table from '../components/Table';
import Loader from '../layout/Loader';
import Form from './Form';
import './home.css';

const Home = () => {
    const [selectedData, setSelectedData] = useState([]);
    const [email, setEmail] = useState("info@redpositive.in");
    const alert = useAlert()
    const dispatch = useDispatch();
    const { error, data, loading } = useSelector((state) => state.Data);

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
        dispatch(getAllData());
    }, [dispatch, error]);

    const handleAddData = (newData) => {
        // Implement logic to add new data using Redux actions
    };

    const handleDeleteData = (id) => {
        // Implement logic to delete data using Redux actions
    };
    const handleSendData = () => {
        // Logic to send selected data to the specified email address


        // const emailContent =`;

        dispatch(sendDataByEmail(selectedData));
        alert.success("Email Sent Successfull to  info@redpositive.in")

    };



    const handleSelectData = (id) => {
        const updatedData = data.map((item) => {
            if (item.Id === id) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            }
            return item;
        });

        const selectedItems = updatedData.filter((item) => item.selected);
        const existingItemIds = selectedData.map((item) => item.Id);
        const newSelectedItems = selectedItems.filter((item) => !existingItemIds.includes(item.Id));
        const updatedSelectedData = selectedData.filter((item) => existingItemIds.includes(item.Id));

        setSelectedData([...updatedSelectedData, ...newSelectedItems]);
    };



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='flex w-100 h-100 flex-col'>
                    <h1 className='h1'>Home</h1>
                    <Table
                        data={data}
                        onDeleteData={handleDeleteData}
                        onSendData={handleSendData}
                        onSelectData={handleSelectData}
                    />


                    <Link to='/add-new-data' className='addNewData'>
                        Add New Data
                    </Link>
                </div>
            )}
        </>
    );
};

export default Home;
