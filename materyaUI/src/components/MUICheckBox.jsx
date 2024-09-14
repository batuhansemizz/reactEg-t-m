import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Button from "@mui/material/Button";
function MUICheckBox() {

    const [checked, setChecked] = useState(true);

   
  return (

    <div>
      <FormControl component="fieldset">
        {/*}  <FormLabel>Eğitim Durumu</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  />}
            label="İlköğretim"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox disabled defaultChecked />}
            
            label="Lise"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox  />}
            label="Üniversite"
            labelPlacement="end"
          />
        </FormGroup>  */}

        <FormGroup>
            <FormControlLabel 
            control={<Checkbox value={checked} onchanfe={(e) => setChecked(e.target.checked)} />} 
            label="Kullanıcı koşullarını kabul ediyorum"
            labelPlacement="end"
             />
           <Button variant="contained">Formu gönder</Button>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default MUICheckBox;
