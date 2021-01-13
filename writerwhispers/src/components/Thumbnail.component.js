import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Thumbnail extends Component {

    render() {
        return (
            <div className="container">

                <div className="row text-center text-lg-left">

                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Action" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                            <h6 className="text-center">Action</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Adventure" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="" />
                            <h6 className="text-center">Adventure</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Comedy" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="" />
                            <h6 className="text-center">Comedy</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Crime" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/M185_qYH8vg/400x300" alt="" />
                            <h6 className="text-center">Crime</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Drama" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300" alt="" />
                            <h6 className="text-center">Drama</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Fantasy" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/AvhMzHwiE_0/400x300" alt="" />
                            <h6 className="text-center">Fantasy</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Horror" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/2gYsZUmockw/400x300" alt="" />
                            <h6 className="text-center">Horror</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Mystery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EMSDtjVHdQ8/400x300" alt="" />
                            <h6 className="text-center">Mystery</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Romance" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/8mUEy0ABdNE/400x300" alt="" />
                            <h6 className="text-center">Romance</h6>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-5 col-5">
                        <a href="story-Ideas/Sci-fi" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/G9Rfc1qccH4/400x300" alt="" />
                            <h6 className="text-center">Sci-fi</h6>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
