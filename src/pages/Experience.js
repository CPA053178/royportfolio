import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1991 - 1994"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          SANTA CRUZ NATIONAL  HIGH SCHOOL		
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1997 - 2001"
          iconStyle={{ background: "#08A933", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          HOLY CROSS DAVAO COLLEGE
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Bachelor of Science in Accountancy</p>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2003 - 2007"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Internal Auditor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          DECOARTS MKTG. INC., DAVAO CITY
          </h4>
          <p>•	Develop and recommend policies and procedures as 
            may be necessary to strengthen 
            existing operating and financial control systems.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - 2014"
          iconStyle={{ background: "#ECA6DE", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Senior Internal Auditor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Uraya Land Development, Inc.
          </h4>
          <p>
          •	To ensure that the company’s operations is carried out economically, efficiently and effectively. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2017"
          iconStyle={{ background: "#4006AB", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Accountant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Vanimo Forest Products Limited
          Vanimo Sandaun , Papua New Guinea
          </h4>
          <p>
          Assist the Finance Manager in preparation of budget & others. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - Present"
          iconStyle={{ background: "#82BA07", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Certified Practising Accountants Papua New Guinea   
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Certified Practising Accountants(CPA)
          </h4>

          <p> Member</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#5BE9E0", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Accountant/Administrator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          St. Mary Medical Centre Ltd.
          Port Moresby , Papua New Guinea
          </h4>
          <p>
          Do admin and accounting works. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "#885BE9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          General Accountant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Automart Limited (Group of   Companies)
          Port Moresby , Papua New Guinea
          </h4>
          <p>
          1.	Checking goods and services tax (GST), SWT and other IRC matters for lodgement.
2.	Bank reconciliation
3.	Assist the Executive Director on financial matters & contracts interpretation.
4.	Checking Petty cash entries and monitoring
5.	Preparation of Financial Statement for Bank requirements(semi-annual) and IRC lodgement(yearly)
6.	Resolving IRC discrepancies.
7.	Prepare budgets for nine related companies
8.	Recommending policies and procedures
9.	Set-up accounting system MYOB and Quickbooks 
10.	Preparation of Cash Flows.
11.	Reconcile Intercompany transactions
12.	Banking transaction (deposits, telegraphic transfers en-cashments)
13.	Mentoring the managers in 9 related companies regarding accounting matters.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present"
          iconStyle={{ background: "#20DF59", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Finance Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Bismark Maritime Ltd.
          Morobe Province, Lae, Papua New Guinea
          </h4>
          <p>
             1. Checking goods and services tax (GST), SWT and other IRC matters for lodgments.
    2. Checking petty cash entry.
3. Helping the FC for the preparation of Financial Statement for Bank requirements(semi-annua) and IRC lodgement(yearly)
4. Keep cash for casual salaries & others
5. Mentoring local staffs on accounting matters
6. Reconcile Inter-related companies’ transaction
7. Assist the Directors on financial matters
8. Monitoring the monthly Budgets
9. Reconciliation of Monthly Ledger
10. Manage corporate online payments and telegraphic transfer

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 5 - June 04, 2023"
          iconStyle={{ background: "#7FDCF4", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          ZyberLab IT Solutions
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Fullstack Web Developer Certification
          </h4>

          <p> Fullstack Web Developer</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
