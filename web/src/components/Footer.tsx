import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="py-2">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Keep in touch
                            </h6>
                            <div>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Online Shopping
                            </h6>
                            <p>
                                <a href="/" className="text-reset">Men</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Women</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Kids</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="/" className="text-reset">Contact Us</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">FAQ</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4">
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="//">e-commerce.com</a>
            </div>
        </footer>
    )
}

export default Footer
