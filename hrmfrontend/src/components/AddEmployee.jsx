import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    // El navigate es para navegar de una página a otra sin problemas
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        empName: "",
        empAddress: "",
        empSalary: ""
    });

    // Aplicacmos desestructuración de nuestro empleado.
    const { empName, empAddress, empSalary } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    // async le dice a JS que la función va a hacer algo que toma tiempo y que no bloquee el resto del programa.
    const onSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue.

        // await siempre va dentro de async porque este espera la respuesta de la Api
        // Todo esto equivale a Axios.
        await fetch("http://localhost:8080/employees/save", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(employee)
        });
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className='mb-3'>
                            Name<input type='text' name='empName' value={empName} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Address<input type='text' name='empAddress' value={empAddress} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Salary<input type='number' name='empSalary' value={empSalary} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-success'>Add Employee</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
