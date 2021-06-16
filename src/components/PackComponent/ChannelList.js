import React from "react"

function ChannelList() {
    return (
        <div >
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Pack Name</th>
                        <th>Pack Channels</th>
                        
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>Star</th>
                        <th>StarSport1,StarSport2</th>
                        
                    </tr>
                    <tr>
                        <th>Regional</th>
                        <th>Darshan,Sanskar</th>
                        
                    </tr>
                    <tr>
                        <th>Entertainment</th>
                        <th>CNC,Pogo</th>
                        
                    </tr>

                </tbody>
                </table>
        </div>
    )
}

export default ChannelList;