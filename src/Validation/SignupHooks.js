import {useState} from 'react';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useForm = (initialValues,validate) => {
	const [inputs,setInputs] = useState(initialValues);
	const [errors,setErrors] = useState({});
	toast.configure();

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validate(inputs);
		const noErrors = Object.keys(validationErrors).length === 0;
    console.log(validationErrors,noErrors)
		setErrors(validationErrors);
		if(noErrors){
			console.log("Authenticated",inputs);
			localStorage.setItem("userDetails",JSON.stringify(inputs))
      initialValues.props.history.push("/cv");
		}else{
			console.log("errors try again",validationErrors);
		}
		
	}

	const handleInputChange = (event) => {
    	event.persist();
    	setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  	}

	const handleCheckedChange =(event)=>{
		event.preventDefault()
		setInputs(inputs=>({...inputs,[event.target.name]:event.target.checked}));
	}

		return {
    	handleSubmit,
   		handleInputChange,
			handleCheckedChange,
    	inputs,
    	errors
  	};
}

export default useForm;
