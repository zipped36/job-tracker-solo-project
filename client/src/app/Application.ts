export interface Application {
    _id: string
    companyName: String
    position: String
    location: String
    jobNature: String
    employmentType: String
    salary: Number
    details: String
    appliedDate?: Date
    interviewDate?: Date
    status: String
    jobLink: String
}