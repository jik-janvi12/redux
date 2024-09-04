import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit ,deleteview,editview} from './CountSlice'
import {Formik, Field,Form } from 'formik'
const Clickbu = () => {
    const data =useSelector((state) => state.counter.item)

    const intialvalue = useSelector((state) => state.counter.initialValues)
    const dispatch = useDispatch()

    const handlesubmit = (value,{resetForm}) =>{
      // console.log("=======>value",value);
      dispatch(submit(value))
      resetForm();
    }

    const deletedata = (index) =>{
      // console.log(index);
      dispatch(deleteview(index))
    }
    const editdata = (item,index) =>{
      // console.log(item);
      dispatch(editview(index,item))
      
    }
  return (
    <>
        <h2>Contact Book</h2>
        <Formik 
          enableReinitialize
          initialValues={intialvalue}
          onSubmit={handlesubmit}
        >
            <Form>
              FirstName:- <Field id="firstName" name="firstName" placeholder="firstName"></Field><br /><br />
              LastName:- <Field id="lastName" name="lastName" placeholder="lastName"></Field><br /><br />
              Email:- <Field id="email" name="email" placeholder="email"></Field><br /><br />
              <button type="submit">Submit</button>
            </Form>
        </Formik>
        <table border="1">
          <tr>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Email</td>
            <td>Delete</td>
            <td>Update</td>
          </tr>
          {
            data.map((item,index) =>(
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() =>deletedata(index)}>Delete</button>
                  </td>
                  <td>
                  <button onClick={() =>editdata(item,index)}>Update</button>
                  </td>
                </tr>
            ))
          }
        </table>
    </>
  )
}

export default Clickbu
