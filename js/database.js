// JavaScript Database Implementation for HMS
// This replaces the MySQL database with localStorage and JavaScript objects

// Initialize the database
const HMSDatabase = {
  // Initial data from your SQL file
  data: {
    admin: [
      {
        id: 1,
        username: "admin",
        password: "Test@12345",
        updationDate: "30-10-2022 11:42:05 AM"
      }
    ],
    
    appointment: [
      {
        id: 4,
        doctorSpecialization: "Dental",
        doctorId: 2,
        userId: 4,
        consultancyFees: 800,
        appointmentDate: "2023-12-22",
        appointmentTime: "3:00 PM",
        postingDate: "2023-12-14 06:56:19",
        userStatus: 1,
        doctorStatus: 2,
        updationDate: "2023-12-15 01:23:32"
      },
      {
        id: 5,
        doctorSpecialization: "Dental",
        doctorId: 2,
        userId: 4,
        consultancyFees: 800,
        appointmentDate: "2023-12-14",
        appointmentTime: "8:45 AM",
        postingDate: "2023-12-15 00:34:24",
        userStatus: 1,
        doctorStatus: 1,
        updationDate: null
      }
    ],
    
    call_table: [],
    
    doctors: [
      {
        id: 2,
        specilization: "Dental",
        doctorName: "Marben",
        address: "asdsad asdsad",
        docFees: "800",
        contactno: 1231231230,
        docEmail: "Marben@test.com",
        password: "123456", // Converted from MD5 for simplicity
        creationDate: "2022-11-04 01:06:41",
        updationDate: "2023-12-14 06:55:49"
      }
    ],
    
    doctorslog: [
      {
        id: 33,
        uid: 1,
        username: "Dave@test.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-04 01:53:31",
        logout: "04-12-2023 07:29:31 AM",
        status: 1
      },
      {
        id: 34,
        uid: null,
        username: "Marben@test.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-14 06:53:01",
        logout: null,
        status: 0
      },
      {
        id: 35,
        uid: null,
        username: "Marben@test.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-14 06:53:26",
        logout: null,
        status: 0
      },
      {
        id: 36,
        uid: 2,
        username: "Marben@test.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-14 06:53:47",
        logout: "14-12-2023 12:53:52 PM",
        status: 1
      },
      {
        id: 37,
        uid: 2,
        username: "Marben@test.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-15 00:37:14",
        logout: "15-12-2023 07:57:57 AM",
        status: 1
      }
    ],
    
    doctorspecilization: [
      {
        id: 1,
        specilization: "Dental",
        creationDate: "2022-10-30 18:09:46",
        updationDate: "2023-12-14 06:55:42"
      }
    ],
    
    tblcontactus: [
      {
        id: 1,
        fullname: "Anuj kumar",
        email: "anujk30@test.com",
        contactno: 1425362514,
        message: "This is for testing purposes.   This is for testing purposes.This is for testing purposes.This is for testing purposes.This is for testing purposes.This is for testing purposes.This is for testing purposes.This is for testing purposes.This is for testing purposes.",
        PostingDate: "2022-10-30 16:52:03",
        AdminRemark: null,
        LastupdationDate: null,
        IsRead: null
      },
      {
        id: 2,
        fullname: "Anuj kumar",
        email: "ak@gmail.com",
        contactno: 1111122233,
        message: "This is for testing",
        PostingDate: "2022-11-06 13:13:41",
        AdminRemark: "Contact the patient",
        LastupdationDate: "2022-11-06 13:13:57",
        IsRead: 1
      }
    ],
    
    tblmedicalhistory: [
      {
        ID: 1,
        PatientID: 1,
        BloodPressure: "80/120",
        BloodSugar: "120",
        Weight: "85",
        Temperature: "98",
        findings: null,
        MedicalPres: "Test",
        CreationDate: "2022-11-06 13:19:41"
      },
      {
        ID: 2,
        PatientID: 1,
        BloodPressure: null,
        BloodSugar: "",
        Weight: null,
        Temperature: null,
        findings: "asdas asd asd as asd asd asd asd d",
        MedicalPres: " asdsdsd213123sd das das asda sd213123 sadasdasd asd asd sad",
        CreationDate: "2023-12-15 01:17:13"
      }
    ],
    
    tblpage: [
      {
        ID: 1,
        PageType: "aboutus",
        PageTitle: "About Us",
        PageDescription: '<ul style="padding: 0px; margin-right: 0px; margin-bottom: 1.313em; margin-left: 1.655em;" times="" new="" roman";="" font-size:="" 14px;="" text-align:="" center;="" background-color:="" rgb(255,="" 246,="" 246);"><li style="text-align: left;"><font color="#000000">Our dental clinic is asd, as\',d\'asd\'as \'as,,asdasda asdasdasd;asdl amdl;asmd;l am;asm;d mas;dmasndjasbdjadavbdjabsd&nbsp; asdbaskjbd kjasbkajsb dkjasbd kasb b b kbsakd baskjdbaskjdbkasjbd kjasbdka bkasbdkasbk bkab dkasbdkasbdasbdkasbdkasbd kasbdkasbdkasbdkasbdkjasbdkjasbdkjasbdkjasbdkjasb kjsbdkjasbkasb dbaskdbkasjdbkjasdb</font></li></ul>',
        Email: null,
        MobileNumber: null,
        UpdationDate: "2020-05-20 07:21:52",
        OpenningTime: null
      },
      {
        ID: 2,
        PageType: "contactus",
        PageTitle: "Contact Details",
        PageDescription: "Negros Philippines",
        Email: "info@gmail.com",
        MobileNumber: 1122334455,
        UpdationDate: "2020-05-20 07:24:07",
        OpenningTime: "9 am To 8 Pm"
      }
    ],
    
    tblpatient: [
      {
        ID: 1,
        Docid: 2,
        PatientName: "ben",
        PatientContno: 1231231230,
        PatientEmail: "marbenbenetez@gmail.com",
        PatientGender: "Male",
        PatientAdd: "asdsadsadad",
        PatientAge: 35,
        PatientMedhis: "NA",
        CreationDate: "2022-11-06 13:18:31",
        UpdationDate: "2023-12-14 07:02:41"
      }
    ],
    
    userlog: [
      {
        id: 11,
        uid: null,
        username: "marbenbenetez@gmail.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-04 01:42:46",
        logout: null,
        status: 0
      },
      {
        id: 12,
        uid: 4,
        username: "marbenbenetez@gmail.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-04 01:43:45",
        logout: "04-12-2023 07:30:30 AM",
        status: 1
      },
      {
        id: 13,
        uid: 4,
        username: "marbenbenetez@gmail.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-14 06:50:58",
        logout: null,
        status: 1
      },
      {
        id: 14,
        uid: 4,
        username: "marbenbenetez@gmail.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-14 06:50:58",
        logout: "14-12-2023 12:53:58 PM",
        status: 1
      },
      {
        id: 15,
        uid: 4,
        username: "marbenbenetez@gmail.com",
        userip: "3a3a3100000000000000000000000000",
        loginTime: "2023-12-15 00:29:39",
        logout: "15-12-2023 07:58:36 AM",
        status: 1
      }
    ],
    
    users: [
      {
        id: 1,
        fullName: "John Doe",
        address: "asdasdasd",
        city: "adsad",
        gender: "male",
        email: "johndoe12@test.com",
        password: "123456", // Converted from MD5 for simplicity
        regDate: "2022-11-06 12:13:56",
        updationDate: "2023-04-28 03:23:20"
      },
      {
        id: 2,
        fullName: "Pher jee",
        address: "asdasdad",
        city: "asdasd",
        gender: "male",
        email: "pher@gmail.com",
        password: "123456", // Converted from MD5 for simplicity
        regDate: "2022-11-06 13:15:32",
        updationDate: "2023-04-28 03:23:35"
      },
      {
        id: 4,
        fullName: "Ben Ben",
        address: "54A Gulgowski Villages",
        city: "Tabaco",
        gender: "female",
        email: "marbenbenetez@gmail.com",
        password: "123456", // Converted from MD5 for simplicity
        regDate: "2023-04-24 00:09:15",
        updationDate: "2023-12-04 01:43:25"
      }
    ]
  },
  
  // Initialize the database
  init: function() {
    console.log('Initializing HMSDatabase...');
    // Load data from localStorage if available, otherwise use default data
    const savedData = localStorage.getItem('hmsDatabase');
    if (savedData) {
      try {
        this.data = JSON.parse(savedData);
        console.log('Loaded data from localStorage');
      } catch (e) {
        console.error('Error loading database from localStorage, using default data');
        this.save();
      }
    } else {
      console.log('Using default data');
      this.save();
    }
    console.log('HMSDatabase initialized with tables:', Object.keys(this.data));
  },
  
  // Save data to localStorage
  save: function() {
    try {
      localStorage.setItem('hmsDatabase', JSON.stringify(this.data));
    } catch (e) {
      console.error('Error saving database to localStorage:', e);
    }
  },
  
  // Get all records from a table
  getAll: function(table) {
    return this.data[table] || [];
  },
  
  // Get a record by ID
  getById: function(table, id) {
    const records = this.getAll(table);
    return records.find(record => record.id === id || record.ID === id);
  },
  
  // Get records by a specific field value
  getByField: function(table, field, value) {
    const records = this.getAll(table);
    return records.filter(record => record[field] === value);
  },
  
  // Add a new record
  add: function(table, record) {
    if (!this.data[table]) {
      this.data[table] = [];
    }
    
    // Generate ID if not provided
    if (!record.id && !record.ID) {
      const records = this.data[table];
      const maxId = records.reduce((max, r) => Math.max(max, r.id || r.ID || 0), 0);
      record.id = maxId + 1;
    }
    
    this.data[table].push(record);
    this.save();
    return record;
  },
  
  // Update a record
  update: function(table, id, updates) {
    const records = this.data[table];
    const index = records.findIndex(record => record.id === id || record.ID === id);
    
    if (index !== -1) {
      records[index] = { ...records[index], ...updates };
      this.save();
      return records[index];
    }
    
    return null;
  },
  
  // Delete a record
  delete: function(table, id) {
    const records = this.data[table];
    const index = records.findIndex(record => record.id === id || record.ID === id);
    
    if (index !== -1) {
      const deleted = records.splice(index, 1);
      this.save();
      return deleted[0];
    }
    
    return null;
  },
  
  // Authenticate user
  authenticate: function(email, password, userType) {
    let user = null;
    
    if (userType === 'admin') {
      user = this.getByField('admin', 'username', email)[0];
    } else if (userType === 'doctor') {
      user = this.getByField('doctors', 'docEmail', email)[0];
      if (!user) {
        user = this.getByField('doctors', 'doctorName', email)[0];
      }
    } else {
      user = this.getByField('users', 'email', email)[0];
    }
    
    if (user && user.password === password) {
      // Remove password before returning
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    
    return null;
  }
};

// Initialize the database when the script loads
console.log('Loading HMSDatabase script...');
HMSDatabase.init();
console.log('HMSDatabase script loaded');