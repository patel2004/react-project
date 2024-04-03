import React from 'react'

function Admin_dashboard() {
    return (
        <div>
            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-lg-9 main-chart">
                            <div className="row mtbox">
                                <div className="col-md-2 col-sm-2 col-md-offset-1 box0">
                                    <div className="box1">
                                        <span className="li_heart" />
                                        <h3>933</h3>
                                    </div>
                                    <p>933 People liked your page the last 24hs. Whoohoo!</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_cloud" />
                                        <h3>+48</h3>
                                    </div>
                                    <p>48 New files were added in your cloud storage.</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_stack" />
                                        <h3>23</h3>
                                    </div>
                                    <p>You have 23 unread messages in your inbox.</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_news" />
                                        <h3>+10</h3>
                                    </div>
                                    <p>More than 10 news were added in your reader.</p>
                                </div>
                                <div className="col-md-2 col-sm-2 box0">
                                    <div className="box1">
                                        <span className="li_data" />
                                        <h3>OK!</h3>
                                    </div>
                                    <p>Your server is working perfectly. Relax &amp; enjoy.</p>
                                </div>
                            </div>{/* /row mt */}
                        </div>{/* --/row --*/}
                    </div>
                </section>
            </section>
        </div>

    )
}

export default Admin_dashboard