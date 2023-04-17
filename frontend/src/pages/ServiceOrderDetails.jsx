import Navbar from '../Components/Navbar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';

function ServiceOrderDetails() {
  return (
    <div>
      <Navbar />
      <OrderDetailsHeader />
      <OrderDetailsTable />
    </div>
  );
}

export default ServiceOrderDetails;