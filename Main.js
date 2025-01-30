import {React,useState} from "react";
import Table from "./Table";

function Main() {
  const [amount,setAmount]=useState();
  const [error,setError]=useState({state:false});
  const availableBalance=17042.67;
  const handleInputChange=(event)=>{
    const val=event.target.value;
    if(!val)
    {
      setError({state:true,error:"Amount cannot be empty"})
    }
    else if(val<0.01)
      {
        setError({state:true,error:"Amount cannot be less than $0.01"})
      }
      else if(val>=17042.67)
        {
          setError({state:true,error:"Amount cannot exceed the available balance"})
        }
        else{
          setAmount(val);
          setError({state:false,error:""})
        }
        
  }
  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD" value={amount} onChange={handleInputChange}/> of my $
            <span>17042.67</span>:
          </label>
          {error.state &&<p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
            {error.error}
          </p>}
          
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table amount={amount} error={error}/>
    </div>
  );
}

export default Main;
