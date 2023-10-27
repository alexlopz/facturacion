import { Card, CardContent, Grid } from "@mui/material";
import { IPlainObject } from "../../definitions/IPlainObject";
import TextSection from "../tools/text-section";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import DomainIcon from "@mui/icons-material/Domain";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const CardCliente: React.FC<IPlainObject> = ({ cliente, fecha }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextSection
              icon={<PersonIcon />}
              label={"Cliente"}
              value={cliente?.nombre}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <TextSection
              icon={<DomainIcon />}
              label={"Nit"}
              value={cliente?.nit}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <TextSection
              icon={<LocationOnIcon />}
              label={"Direccion"}
              value={cliente?.direccion}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <TextSection
              icon={<PhoneIcon />}
              label={"Tel"}
              value={cliente?.telefono}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <TextSection
              icon={<EmailIcon />}
              label={"Email"}
              value={cliente?.email}
            />
          </Grid>
        </Grid>
        {fecha && (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextSection
                icon={<EventAvailableIcon />}
                label={"Fecha Emision"}
                value={fecha?.emision}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextSection
                icon={<EventBusyIcon />}
                label={"Fecha Vencimiento"}
                value={fecha?.vencimiento}
              />
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default CardCliente;
