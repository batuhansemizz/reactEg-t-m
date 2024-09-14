import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider"; // Bu satırı ekleyin

function MUISteck() {
  return (
    <div>

        {/* araları açılır ve yan yana gelir row olunca*/}
         {/* normalde altlata  gelir  columnda ise altalta gelir */}
         {/*mobil içinde {{sx:'colmn', sm: 'row' }} */}
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} >
        <div>1 item</div>
        <div>2 item</div>
        <div>3 item</div>
      </Stack>
    </div>
  );
}

export default MUISteck;
