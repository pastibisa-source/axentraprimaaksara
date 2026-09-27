/*
==========================================================
AXENTRA PRIMA AKSARA
CERTIFICATE VERIFICATION DATABASE
==========================================================
*/

const certificates = {

    "003-SRT-APA-IX-2026": {

        number: "003/SRT/APA/IX/2026",

        name: "M. Romanda Akbar, S.E., M.Si.",

        position: "Founder & Human Resources",

        company: "CV Axentra Prima Aksara",

        issueDate: "23 September 2026",

        status: "VALID"

    }

};


/*
==========================================================
MEMBACA NOMOR SERTIFIKAT DARI URL
==========================================================
*/

const urlParams = new URLSearchParams(window.location.search);

const certificateId = urlParams.get("id");


/*
==========================================================
ELEMENT HTML
==========================================================
*/

const loading = document.getElementById("loading");

const result = document.getElementById("result");

const notFound = document.getElementById("notFound");

const certificateNumber =
    document.getElementById("certificateNumber");

const certificateName =
    document.getElementById("certificateName");

const certificatePosition =
    document.getElementById("certificatePosition");

const certificateCompany =
    document.getElementById("certificateCompany");

const certificateDate =
    document.getElementById("certificateDate");

const certificateStatus =
    document.getElementById("certificateStatus");


/*
==========================================================
PROSES VERIFIKASI
==========================================================
*/

function verifyCertificate() {

    loading.classList.add("hidden");


    /*
    Jika tidak ada ID pada URL
    */

    if (!certificateId) {

        notFound.classList.remove("hidden");

        return;

    }


    /*
    Mencari data sertifikat
    */

    const certificate = certificates[certificateId];


    /*
    Jika nomor sertifikat tidak ditemukan
    */

    if (!certificate) {

        notFound.classList.remove("hidden");

        return;

    }


    /*
    Jika ditemukan
    */

    certificateNumber.textContent =
        certificate.number;

    certificateName.textContent =
        certificate.name;

    certificatePosition.textContent =
        certificate.position;

    certificateCompany.textContent =
        certificate.company;

    certificateDate.textContent =
        certificate.issueDate;

    certificateStatus.textContent =
        certificate.status;


    /*
    Tampilkan hasil
    */

    result.classList.remove("hidden");

}


/*
==========================================================
JALANKAN VERIFIKASI
==========================================================
*/

document.addEventListener(
    "DOMContentLoaded",
    verifyCertificate
);