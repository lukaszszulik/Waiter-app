import styles from './TableForm.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../../redux/TableRedux';
import Button from '../../common/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTableValues } from '../../../redux/TableRedux';
import clsx from 'clsx';

const TableForm = (props) => {
  const id = props.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  useEffect(() => {
    if (status !== 'Busy') {
      setBill(0);
    } else if (status === 'Reserved') {
      // setPeopleAmount(0);
      // setMaxPeopleAmount(10);
      setBill(0);
      setStatus(status);
    } else if (status === 'Free' || status === 'Cleaning') {
      setPeopleAmount(0);
    }
  }, [status, bill]);

  useEffect(() => {
    if (maxPeopleAmount > 10) {
      alert('Max People 10');
      setMaxPeopleAmount(10);
    } else if (peopleAmount > 10) {
      setPeopleAmount(10);
    } else if (maxPeopleAmount < 0) {
      setMaxPeopleAmount(0);
    } else if (peopleAmount < 0) {
      setPeopleAmount(0);
    } else if (peopleAmount > maxPeopleAmount) {
      alert('WARNING!!! People cannot be higher than MaxPeople ');
      setPeopleAmount(maxPeopleAmount);
    }
  }, [maxPeopleAmount, peopleAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTableValues({ id, peopleAmount, status, maxPeopleAmount, bill })
    );

    navigate('/tables');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <h1>Table: {id}</h1>
      <ul>
        <li>
          <span className={styles.span}>Status:</span>
          <select
            className={styles.input_select}
            type='select'
            value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option>Cleaning</option>
            <option>Busy</option>
            <option>Reserved</option>
            <option>Free</option>
          </select>
        </li>
        <li>
          <span className={styles.span}>People:</span>
          <input
            className={styles.input}
            type='number'
            value={peopleAmount}
            onChange={(e) => setPeopleAmount(e.target.value)}
          />
          <span> MaxPeople: </span>
          <input
            className={styles.input}
            type='number'
            value={maxPeopleAmount}
            onChange={(e) => setMaxPeopleAmount(e.target.value)}
          />
        </li>
        <li className={clsx(status !== 'Busy' && styles.hidden_input)}>
          <span className={styles.span}>Bill:</span>
          $
          <input
            className={styles.input_last}
            type='number'
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </li>
        <li>
          {' '}
          <Button className={styles.button}>Update</Button>
        </li>
      </ul>

      {/* <Select value={status} option={status} /> */}
    </form>
  );
};

export default TableForm;