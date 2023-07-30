//throw new Error("Ashish has thrown an error");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AshishValidationError"
    }
}

//throw new ValidationError("Ashish has throw a validation error");

class DBError extends Error {
    constructor(message, dbType, dbUserName) {
        super(message);
        this.dbType = dbType;
        this.dbUserName = dbUserName;
    }
}

throw new DBError("Ashish has thrown a DB Error", "MySql", "ashish-user");