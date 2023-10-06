import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "@mui/material";
import { Home } from "@mui/icons-material";
// import Link from "next/link";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import NoteIcon from '@mui/icons-material/Note';
import BalanceIcon from '@mui/icons-material/Balance';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';


export const mainListItems = (
  <React.Fragment>
   <Link underline="none" color="inherit" href={`/`}>
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>

    <Link underline="none" color="inherit" href={`/deudores`}>
      <ListItemButton>
        <ListItemIcon>
          <MoneyOffIcon />
        </ListItemIcon>
        <ListItemText primary="Lista de Deudores" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/saldos`}>
      <ListItemButton>
        <ListItemIcon>
          <BalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Balance de Antiguedad de Saldos" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/notaCredito`}>
      <ListItemButton>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Nota Credito" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/notaDebito`}>
      <ListItemButton>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Nota Debito" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/visalink`}>
      <ListItemButton>
        <ListItemIcon>
          <PaymentOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Pagos Visalink" />
      </ListItemButton>
    </Link>

    <Link underline="none" color="inherit" href={`/recordatorios`}>
      <ListItemButton>
        <ListItemIcon>
          <AccessAlarmOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Recordatorios" />
      </ListItemButton>
    </Link>
    <Link underline="none" color="inherit" href={`/cargos`}>
      <ListItemButton>
        <ListItemIcon>
          <LayersOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Cargos" />
      </ListItemButton>
    </Link>
  </React.Fragment>

  
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
