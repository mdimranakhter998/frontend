import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navbar_admin } from './Navbarr';
import { Sidebar } from './Sidebar';
import { useFormik } from 'formik';
import { useEffect, useState, useRef,useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import {useGetByIdsubdivisionQuery,useUpdatesubdivisionMutation } from '../../services/admin/subDivisionService';
import { useListdivisionQuery } from '../../services/admin/divisionService';
import { subdivisionSchema } from '../validation/admin/validation';

const initialValues={
    subdivision:'',
    division:'',   
}

export function SubdivisionEdit() {
   const[successShow,setSuccessShow]=useState(false)
   const[message,setMessage]=useState("")
   const {data:divisionList,isLoading:divisionisLoading}=useListdivisionQuery()
    const[errorShow,setErrorShow]=useState(false)
    const [error,setError]=useState([])
    const navigate=useNavigate()
    const editParams=useParams()  
    const {data:getsubdivisionId,isLoading,isSuccess}= useGetByIdsubdivisionQuery(editParams.id)
    const [updateSubdivision,updateSubdivisionFlag]=useUpdatesubdivisionMutation()
   

   
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:initialValues,
        validationSchema:subdivisionSchema,       
        onSubmit:async (values,action) => {       
        Object.keys(values).map(e=>values[e]=values[e].toLowerCase())  
       
        try{          
            const response= await updateSubdivision(values)                          
            if (response.data){              
                setErrorShow(false)             
                setSuccessShow(true)
                setMessage("you have update successfully")
                      
                setTimeout(()=>{
                    setSuccessShow(false)
                    action.resetForm()     
                    navigate('/admin/sub_Division_d')
                },1000)               
                        
            }          
                      
            if(response.error.status==406){                            
                setErrorShow(true)
                setError(Object.values(response.error.data))        
               
            }           
        }
        catch{
            console.log("server down")
        }
      
           return values      
       

        },        
    
    })
console.log(values)
const get=useMemo(()=>{
        if (isSuccess){
        let tm=getsubdivisionId.map(e=>e)
        tm.forEach((e,values)=>{
            initialValues.id=e.id.toString()
            initialValues.subdivision=e.subdivision
            initialValues.division=e.division.toString()
            values=e
        })  
    }
    },[isSuccess])
    return (
      
        <>
   


{isLoading?(
    <>
   
    </>
    ):(
        <>
        <Navbar_admin />

<Container >
<hr />
    <h5>Add Subdivision</h5>
    <hr />
    <br />

    <Row style={{ display: 'flex' }}>


        <Col sm={2}>
            <Sidebar />
        </Col>



        <Col sm={10}>
        <Alert show={successShow} variant="success">{message}</Alert>
            <Form className='common_css' onSubmit={handleSubmit} >
                <Row className="mb-3">
                <Alert show={errorShow} variant="danger"><ul>{error.map(error=><li>{error}</li>)}</ul></Alert>  
                    <Form.Group as={Col} controlId="formBasicblock">
                        <Form.Label>Subdivision Name</Form.Label>
                        <Form.Control type="text"  name="subdivision" value={values.subdivision} onChange={handleChange}  onBlur={handleBlur} placeholder="" />
                        {errors.subdivision && touched.subdivision?(<p className="text-danger">{errors.subdivision}</p>):null}
                    </Form.Group>

                   

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formBasicbdist">
                        <Form.Label>Division</Form.Label>
                        <Form.Select name="division" value={values.division}  onChange={handleChange} onBlur={handleBlur} aria-label="Default select example" >
                            <option>---select---</option> 
                            {divisionList.map(e=>
                                <option value={e.division}>{e.division}</option>
                                )}                   
                            
                           

                        </Form.Select>
                    </Form.Group>
                </Row>
                <br/>

                <Button type="submit"   name="save" variant="primary" className="m-1" size="sm">
                    Save 
                </Button>
            </Form>
        </Col>
    </Row>
</Container>
</>
 )}  
               
        </>
       
    )
}