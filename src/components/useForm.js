import { useState} from "react";
const useForm = (newNewsFeed, cValueType) => {
    const getValueType = (params) => (params === "publisher" ? "article" : "feedbacks");
    const [values, setValues] = useState(newNewsFeed)
    const valueType = getValueType(cValueType)
   

    const handleInputChange = (e, vType, props) => {     

        const { name, value } = e.target

        if (props.editModeOn)
        {
            props.currentItemValue[getValueType(props.uType.userType)][name] = value;
            
        }
        else{

            if (vType === "article")  {            
                newNewsFeed[vType][name] = value; 
            } 
            if (vType === "feedbacks")  {            
                newNewsFeed[vType][0][name] = value; 
            }
    
            setValues(values => {
                return {
                    ...values, ...newNewsFeed
                }             
            });
        }

        
    }

    const resetForm = () => {
        setValues({
            ...newNewsFeed
        })
    }  

    return {
        valueType,
        values,
        setValues,
        handleInputChange,
        resetForm,
        getValueType
    };
}

export default useForm;