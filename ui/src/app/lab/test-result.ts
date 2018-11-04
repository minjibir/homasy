export class TestResult {

    // This is the ID number of the test request by the doctors.
    public testId: number;

    // ID number of the person who record the result.
    // which should be retrieved from the login infor (token).
    public labTechnicianId: number;

    public hppsresult?: string;
    public bloodgroupresult?: string;
    public fastingbloodsugarresult?: string;
    public fbcresult?: string;
    public hbaicresult?: string;
    public hbsapresult?: string;
    public hcvresult?: string;
    public hivresult?: string;
    public hepetitisprofileresult?: string;
    public lipidprofileresult?: string;
    public liverfunctionresult?: string;

    public malariaresult?: string;
    public pregnancyresult?: string;
    public psaresult?: string;
    public randombloodsugarresult?: string;
    public stoolmcsresult?: string;
    public stoolmicroscopyresult?: string;
    public toxicologyresult?: string;
    public urinalysisresult?: string;
    public urinemcsresult?: string;
    public vdrcresult?: string;
    public widalresult?: string;
}
