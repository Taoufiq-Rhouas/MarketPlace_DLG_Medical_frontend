import React from 'react'
import { Link } from 'react-router-dom'

export default function VendeurHomeScreen(props) {
    // function addproduct(){
    //     alert('cc');
    // }
    return (
        
        <div>

            <h1>Home Vendeur</h1>

            <div className="containerDashboard">
                <div className="rowDashboardLeft">
                        <div className="col-2">
                    <button type="button" className="btn btn-primary btnLGDashboardLeft" >
                        <Link to={`/register`} className="btnLGDashboardLeft">
                            Add Product
                        </Link>
                    </button>
                    </div>
                </div>
                <div className="rowDashboardRight">
                    {/* <div class="col-2">
                    <button class="btn btn-primary" type="button">Button</button>
                    </div> */}
                </div>
            </div>







            {/* Option 1: Bootstrap Bundle with Popper */}
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> */}
        </div>
    )
}
