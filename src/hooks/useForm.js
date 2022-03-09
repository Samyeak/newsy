import React, {useState, useEffect} from "react";
import { toast } from "../helpers/toast";

function useForm(initialState, validate, action){
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    useEffect(()=>{
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                action();
                setValues(initialState);
                setIsSubmitting(false);
            }else{
                toast(Object.values(errors).join(" "));
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    function handleChange(event) {
        
    }
}
