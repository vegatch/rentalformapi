const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());


// let transporter = nodemailer.createTransport({
//  service: "gmail",
//  auth: {
//    type: "OAuth2",
//    user: process.env.EMAIL,
//    pass: process.env.APPWORD,
//    clientId: process.env.OAUTH_CLIENTID,
//    clientSecret: process.env.OAUTH_CLIENT_SECRET,
//    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//  },
// });



let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APPWORD,
  },
});

transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});





app.post("/send", function (req, res) {
 
let message = {
  from: `${req.body.messageState.client_name}`,
  phone: `${req.body.messageState.phone_number} `,
  email: `${req.body.messageState.client_email}`,
  text: `${req.body.messageState.message}`,

//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.messageState.client_email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.messageState.client_name} from Benskya's contact form`,
   text: `<p>${message.text}<p/>  <p>${message.phone}<p/>`,
   html:`<p>Name: ${message.from}<p/>
         <p>CellPhone: ${message.phone}<p/>
         <p>Email: ${message.email}<p/>
         Message: <p>${message.text}<p/>  
         `,
};

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

app.post("/quoteRequest", function (req, res) {
 
let message = {
  from: `${req.body.formData.firstName} ${req.body.formData.middleName} ${req.body.formData.lastName}`,
  phone: `${req.body.formData.phoneNumber} `,
  email: `${req.body.formData.email}`,
  address: `${req.body.formData.streetName} ${req.body.formData.city} ${req.body.formData.state} ${req.body.formData.zipCode}`,
  bedroom: `${req.body.formData.bedroom} `,
  bathroom: `${req.body.formData.bathroom} `,
  cleaningType: `${req.body.formData.cleaningType} `,

//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.formData.email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.formData.firstName} from Benskya's contact form`,
  //  text: `<p>${message.text}<p/>  <p>${message.phone}<p/>`,
   html:`<p>Name: ${message.from}<p/>
         <p>Phone: ${message.phone}<p/>        
         Message: <p>${message.address}<p/>  
         `,
};

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

app.post("/rentscreen", function (req, res) {
 
let message = {
  from: `${req.body.formData.fname} ${req.body.formData.mname} ${req.body.formData.lname}`,
  dob:`${req.body.formData.dob}`,
  ssn:`${req.body.formData.mssn}`,
  dln:`${req.body.formData.dln}`,
  phone: `${req.body.formData.phone} `,
  email: `${req.body.formData.applicantemail}`,
  occupant: `${req.body.formData.otherOcc}`,
  occupantdesc: `${req.body.formData.occDesc}`,
  pet: `${req.body.formData.pet}`,
  petdesc: `${req.body.formData.petDesc}`,
  convicted: `${req.body.formData.crime}`,
  convicteddesc: `${req.body.formData.crimeDesc}`,
  bankrupt: `${req.body.formData.bankrupt}`,
  bankruptdesc: `${req.body.formData.bankruptDesc}`,
  evicted: `${req.body.formData.evict}`,
  evicteddesc: `${req.body.formData.evictDesc}`,
  curcompany: `${req.body.formData.company}`,
  curoccupation: `${req.body.formData.occupation}`,
  curduration: `${req.body.formData.howlong}`,
  curincome: `${req.body.formData.grossincome}`,
  curcompanystreet: `${req.body.formData.street}`,
  curcompanycity: `${req.body.formData.city}`,
  curcompanystate: `${req.body.formData.state}`,
  curcompanysupervisor: `${req.body.formData.supervisor}`,
  prevcompany: `${req.body.formData.prevcompany}`,
  prevoccupation: `${req.body.formData.prevoccupation}`,
  prevduration: `${req.body.formData.previouslong}`,
  previncome: `${req.body.formData.prevgrossincome}`,
  prevcompanystreet: `${req.body.formData.prevstreet}`,
  prevcompanycity: `${req.body.formData.prevcity}`,
  prevcompanystate: `${req.body.formData.prevstate}`,
  prevcompanysupervisor: `${req.body.formData.prevsupervisor}`,
  curresidencetype: `${req.body.formData.residence}`,
  cursquarefoot: `${req.body.formData.squarefootage}`,
  curnumbeds: `${req.body.formData.numbed}`,
  currentamount: `${req.body.formData.rentamount}`,
  curresidencestreet: `${req.body.formData.curstreetres}`,
  curresidencecity: `${req.body.formData.curcityres}`,
  curresidencestate: `${req.body.formData.curstateres}`,
  curresidencezip: `${req.body.formData.curzipres}`,
  curresidenceduration: `${req.body.formData.curdurationres}`,
  curresidenceleaseend: `${req.body.formData.curexpirationres}`,
  movingreason: `${req.body.formData.movingreason}`,
  curlandlord: `${req.body.formData.landlordname}`,
  curlandlordaddress: `${req.body.formData.landlordaddress}`,
  curlandlordphone: `${req.body.formData.landlordphone}`,
  curlandlordemail: `${req.body.formData.landlordemail}`,
  prevresidencetype1: `${req.body.formData.prevresidence}`,
  prevresidencesquarefoot1: `${req.body.formData.prevsquarefootage}`,
  prevresidencenumbeds1: `${req.body.formData.prevnumbed}`,
  prevresidencerentamount1: `${req.body.formData.prevrentamount}`,
  prevresidencestreet1: `${req.body.formData.prevstreetres}`,
  prevresidencecity1: `${req.body.formData.prevcityres}`,
  prevresidencestate1: `${req.body.formData.prevstateres}`,
  prevresidencezip1: `${req.body.formData.prevzipres}`,  
  prevresidencestart1: `${req.body.formData.prevstartdate}`,
  prevresidenceend1: `${req.body.formData.prevenddate}`,
  prevlandlord1: `${req.body.formData.prevlandlordname}`,
  prevlandlordaddress1: `${req.body.formData.prevlandlordaddress}`,
  prevlandlordphone1: `${req.body.formData.prevlandlordphone}`,
  prevlandlordemail1: `${req.body.formData.prevlandlordemail}`,  
  prevresidencetype2: `${req.body.formData.prevresidence2}`,
  prevresidencesquarefoot2: `${req.body.formData.prevsquarefootage2}`,
  prevresidencenumbeds2: `${req.body.formData.prevnumbed2}`,
  prevresidencerentamount2: `${req.body.formData.prevrentamount2}`,
  prevresidencestreet2: `${req.body.formData.prevstreetres2}`,
  prevresidencecity2: `${req.body.formData.prevcityres2}`,
  prevresidencestate2: `${req.body.formData.prevstateres2}`,
  prevresidencezip2: `${req.body.formData.prevzipres2}`,  
  prevresidencestart2: `${req.body.formData.prevstartdate2}`,
  prevresidenceend2: `${req.body.formData.prevenddate2}`,
  prevlandlord2: `${req.body.formData.prevlandlordname2}`,
  prevlandlordaddress2: `${req.body.formData.prevlandlordaddress2}`,
  prevlandlordphone2: `${req.body.formData.prevlandlordphone2}`,
  prevlandlordemail2: `${req.body.formData.prevlandlordemail2}`,

  referencename: `${req.body.formData.reffullname1}`,
  referencerelation: `${req.body.formData.refrelation1}`,
  referencephone: `${req.body.formData.refphone1}`,
  referenceemail: `${req.body.formData.refemail1}`,
  referencename1: `${req.body.formData.reffullname2}`,
  referencerelation1: `${req.body.formData.refrelation2}`,
  referencephone1: `${req.body.formData.refphone2}`,
  referenceemail1: `${req.body.formData.refemail2}`,
  additional: `${req.body.formData.adddetail}`,

  applicantsignature: `${req.body.formData.applicantsignature}`,
  applicantsignaturedate: `${req.body.formData.applicantdatesignature}`,

  
  address: `${req.body.formData.streetName} ${req.body.formData.city} ${req.body.formData.state} ${req.body.formData.zipCode}`,
  bedroom: `${req.body.formData.bedroom} `,
  bathroom: `${req.body.formData.bathroom} `,
  cleaningType: `${req.body.formData.cleaningType} `,

//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.formData.email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `${req.body.formData.fname} has submitted the application for the rent`,
  
   html:`
        
        <div> 
            <span>
                Fullname: ${message.from}  &ensp; &ensp;   Date of birth: ${message.dob}   &ensp; &ensp;  SSN: ${message.ssn}
            </span>             
        </div>
        
        <div> 
            <span>
                Driver license #: ${message.dln}  &ensp; &ensp; Phone: ${message.phone} &ensp; &ensp;  Email: ${message.email}
            </span> 
            
        </div>
        
        <div> 
            <span>
                Other occupants: ${message.occupant}  &ensp; &ensp; If yes, describe: ${message.occupantdesc} 
            </span> 
            
        </div>
        
        <div> 
            <span>
                Pets: ${message.pet}  &ensp; &ensp; If yes, describe: ${message.petdesc} 
            </span> 
            
        </div>
        
        <div> 
            <span>
                Ever been convicted of a crime: ${message.convicted}  &ensp; &ensp; If yes, describe: ${message.convicteddesc} 
            </span> 
            
        </div>
        
        <div> 
            <span>
                Ever filed for bankruptcy: ${message.bankrupt}  &ensp; &ensp; If yes, describe: ${message.bankruptdesc} 
            </span>             
        </div>
        
        <div> 
            <span>
                Ever been evicted: ${message.evicted}  &ensp; &ensp; If yes, describe: ${message.evicteddesc} 
            </span>             
        </div>
        <br>
        <p><strong>Current employment</strong></p>
        
        <div> 
            <span>
                Company: ${message.curcompany}  &ensp; &ensp; Occupation/Title: ${message.curoccupation} 
            </span> 
            
        </div>
        
        <div> 
            <span>
                How long: ${message.curduration}  &ensp; &ensp; Gross Income from prior year filing: ${message.curincome}
            </span> 
            
        </div>
        
        <div> 
            <span>
                Street address: ${message.curcompanystreet}  &ensp; &ensp; City: ${message.curcompanycity} &ensp; &ensp; State: ${message.curcompanystate} &ensp; &ensp; Supervisor: ${message.curcompanysupervisor}
            </span> 
            
        </div>
        <br>
        <p><strong>Previous employment</strong></p>
        
        <div> 
            <span>
                Company: ${message.prevcompany}  &ensp; &ensp; Occupation/Title: ${message.prevoccupation} 
            </span> 
            
        </div>
        
        <div> 
            <span>
                How long: ${message.prevduration}  &ensp; &ensp; Gross Income: ${message.previncome}
            </span> 
            
        </div>
        
        <div> 
            <span>
                Street address: ${message.prevcompanystreet}  &ensp; &ensp; City: ${message.prevcompanycity} &ensp; &ensp; State: ${message.prevcompanystate} &ensp; &ensp; Supervisor: ${message.prevcompanysupervisor}
            </span> 
            
        </div>
        <br>
        <p><strong>Current Residence </strong></p>
        <div> 
            <span>
                Type: ${message.curresidencetype}  &ensp; &ensp; Square feet (SF): ${message.cursquarefoot} &ensp; &ensp; beds: ${message.curnumbeds} &ensp; &ensp; Rent amount /Month: ${message.currentamount}
            </span>             
        </div>
        <div> 
            <span>
                Street Address: ${message.curresidencestreet} &ensp; &ensp; city: ${message.curresidencecity} &ensp; &ensp; State: ${message.curresidencestate}
            </span>             
        </div>        
        <div> 
            <span>
                How long at this address: ${message.curresidenceduration}  &ensp; &ensp; Lease expiration date: ${message.curresidenceleaseend} &ensp; &ensp; Desire for moving: ${message.movingreason} 
            </span>             
        </div>
        <p><strong>Current landlord</strong></p>
        <div> 
            <span>
                Fullname: ${message.curlandlord}  &ensp; &ensp; Address: ${message.curlandlordaddress} &ensp; &ensp; Phone: ${message.curlandlordphone} &ensp; &ensp; Email: ${message.curlandlordemail} 
            </span>             
        </div>
        <br>
        <p><strong>Previous Residence 1</strong></p>
        <div> 
            <span>
                Type: ${message.prevresidencetype1}  &ensp; &ensp; Square feet (SF): ${message.prevresidencesquarefoot1} &ensp; &ensp; beds: ${message.prevresidencenumbeds1} &ensp; &ensp; Rent amount /Month: ${message.prevresidencerentamount1}
            </span>             
        </div>
        <div> 
            <span>
                Street Address: ${message.prevresidencestreet1} &ensp; &ensp; city: ${message.prevresidencecity1} &ensp; &ensp; State: ${message.prevresidencestate1}
            </span>             
        </div>        
        <div> 
            <span>
                Start date: ${message.prevresidencestart1}  &ensp; &ensp; End date: ${message.prevresidenceend1}  
            </span>             
        </div>
        <p><strong>Previous Landlord 1 </strong></p>
        <div> 
            <span>
                Fullname: ${message.prevlandlord1}  &ensp; &ensp; Address: ${message.prevlandlordaddress1} &ensp; &ensp; Phone: ${message.prevlandlordphone1} &ensp; &ensp; Email: ${message.prevlandlordemail1} 
            </span>             
        </div>

        <p><strong>Previous Residence 2</strong></p>
        <div> 
            <span>
                Type: ${message.prevresidencetype2}  &ensp; &ensp; Square feet (SF): ${message.prevresidencesquarefoot2} &ensp; &ensp; beds: ${message.prevresidencenumbeds2} &ensp; &ensp; Rent amount /Month: ${message.prevresidencerentamount2}
            </span>             
        </div>
        <div> 
            <span>
                Street Address: ${message.prevresidencestreet2} &ensp; &ensp; city: ${message.prevresidencecity2} &ensp; &ensp; State: ${message.prevresidencestate2}
            </span>             
        </div>        
        <div> 
            <span>
                Start date: ${message.prevresidencestart2}  &ensp; &ensp; End date: ${message.prevresidenceend2}  
            </span>             
        </div>
        <p><strong>Previous Landlord 2</strong></p>
        <div> 
            <span>
                Fullname: ${message.prevlandlord2}  &ensp; &ensp; Address: ${message.prevlandlordaddress2} &ensp; &ensp; Phone: ${message.prevlandlordphone2} &ensp; &ensp; Email: ${message.prevlandlordemail2} 
            </span>             
        </div>

        <br>
        <p><strong>Personal references</strong></p>
        <div> 
            <span>
                Fullname: ${message.referencename}  &ensp; &ensp; Relationship: ${message.referencerelation} &ensp; &ensp; Phone: ${message.referencephone} &ensp; &ensp; Email: ${message.referenceemail} 
            </span>             
        </div>

        <div> 
            <span>
                Fullname: ${message.referencename1}  &ensp; &ensp; Relationship: ${message.referencerelation1} &ensp; &ensp; Phone: ${message.referencephone1} &ensp; &ensp; Email: ${message.referenceemail1} 
            </span>             
        </div>

        <br>
        <p><strong> Additional details (if any) </strong></p>
        <div> 
            <span>
                Please describe (if any): ${message.additional}   
            </span>             
        </div>

        <p>
            I hereby certify that I am at least 18 years of age. Applicant represents that all information given on this application is true and correct. Applicant hereby authorizes verification of all references and facts, including but not limited to current and previous landlords, employers, and personal refe rences. Applicant hereby authorizes owner/agent to obtain any and all Unlawful Detainer, Credit Reports, Telechecks and/or Criminal Background Reports. Applicant agrees to furnish additional credit and/or personal references upon request. Applicant understands that incomplete or incorrect information provided in the application may cause a delay in processing which may result in denial of tenancy. Applicant hereby waives any claim and releases from liability any person providing or obtaining said verification or additional information.
        </p>

        <br>

        <div>
            <span>
                <strong> Applicant's signature </strong>: ${message.applicantsignature}  &ensp; &ensp; <strong> Date </strong>: ${message.applicantsignaturedate} 
            </span>    
        </div>

         `,
};

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});


 