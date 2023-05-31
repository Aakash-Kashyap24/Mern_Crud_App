import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData, deleteDataById } from '../actions/ProductAction';
import './table.css';

const Table = ({ data, onDeleteData, onSendData, onSelectData }) => {
    const [editData, setEditData] = useState({});
    const dispatch = useDispatch();

    const handleEdit = (item) => {
        setEditData(item);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const saveData = () => {
        dispatch(addData(editData));
        setEditData({});
    };

    const deleteDataId = (Id) => {
        dispatch(deleteDataById(Id));
    };

    useEffect(() => {
    
    }, [data])

    return (
        <div className='table'>
            <div className='flex gap-25 w-100 just-between'>
                <span className='w-150px'>Select</span>
                <span className='w-150px'>ID</span>
                <span className='w-150px'>Name</span>
                <span className='w-150px'>Phone Number</span>
                <span className='w-150px'>Email</span>
                <span className='w-150px'>Hobbies</span>
                <span className='w-150px'>Update/Delete</span>
            </div>
            <div className='flex gap-25 flex-col mt-50'>
                {data.map((item) => (
                    <div key={item.Id} className='flex gap-10 just-between align-centre'>
                        <div className='w-150px'>
                            <input type='checkbox' onChange={() => onSelectData(item.Id)} />
                        </div>
                        <span className='w-150px'>{item.Id}</span>
                        <span className='w-150px'>
                            {editData.Id === item.Id ? (
                                <input
                                    type='text'
                                    name='name'
                                    value={editData.name || ''}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                item.name
                            )}
                        </span>
                        <span className='w-150px'>
                            {editData.Id === item.Id ? (
                                <input
                                    type='text'
                                    name='phoneNumber'
                                    value={editData.phoneNumber || ''}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                item.phoneNumber
                            )}
                        </span>
                        <span className='w-150px'>
                            {editData.Id === item.Id ? (
                                <input
                                    type='text'
                                    name='email'
                                    value={editData.email || ''}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                item.email
                            )}
                        </span>
                        <span className='w-150px'>
                            {editData.Id === item.Id ? (
                                <input
                                    type='text'
                                    name='hobbies'
                                    value={editData.hobbies || ''}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                item.hobbies
                            )}
                        </span>
                        <div className='w-150px flex'>
                            {editData.Id === item.Id ? (
                                <>
                                    <button className='w-150px' onClick={saveData}>
                                        Save
                                    </button>
                                    <button
                                        className='w-150px'
                                        onClick={() => {
                                            setEditData({});
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button className='w-150px' onClick={() => handleEdit(item)}>
                                    Edit
                                </button>
                            )}
                            <button className='w-150px' onClick={() => deleteDataId(item.Id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex mt-50 sendDataButton align-centre w-100'>
                <button className='' onClick={onSendData}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Table;
