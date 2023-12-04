import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddAnAsset = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productType = form.productType.value;
    const productQuantity = form.productQuantity.value;
    const userName = form.userName.value; // Assuming there's an input field for user name
    const userEmail = form.userEmail.value; // Assuming there's an input field for user email

    const currentDate = new Date(); // Get the current date and time
    const assetInfo = {
      productName,
      productType,
      productQuantity,
      user: {
        name: userName,
        email: userEmail
      },
      dateAdded: currentDate.toISOString() // Include the current date in ISO format
    };

    axiosPublic.post("/assets", assetInfo)
      .then(res => {
        console.log(res.data);
      });
  }

  return (
    <div>
       <Helmet>
         <title>Admin || Add An Asset</title>
       </Helmet>
        <h2 className=" text-center mb-4 text-3xl font-bold">Add An Asset</h2>
       <div className="hero mx-auto min-h-screen bg-base-200 w-[800px] pt-20">
         <div className="hero-content w-full ">
           <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-full">
             <form onSubmit={handleSubmit} className="card-body">
               {/* product name and product type */}
               <div className=" flex gap-2">
                 <div className="form-control w-1/2">
                  <label className="label"></label>
                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label"></label>
                  <input
                    type="text"
                    name="productType"
                    placeholder="Product Type"
                    className="input input-bordered"
                  />
                </div>
              </div>
              {/*product quantity and add button  */}
              <div className=" flex gap-2">
                <div className="form-control w-1/2">
                  <label className="label"></label>
                  <input
                    type="text"
                    name="productQuantity"
                    placeholder="Product Quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label"></label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label"></label>
                  <input
                    type="text"
                    name="userEmail"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-4 w-1/2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnAsset;
