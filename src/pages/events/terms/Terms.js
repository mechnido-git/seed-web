import React from "react";
import "./terms.css";

function Terms({close}) {

  return (
    <div className="terms-page">
      <div className="upper"><h3>*Terms and conditions*</h3><span onClick={()=>close(false)} class="material-symbols-outlined">
close
</span></div>
      <h4>Registration Agreement</h4>
      <p id="info">
        By registering in Innovative Design and Engineering Analysis for Virtual
        Kart (I.D.E.A. V-Kart), the Team Captain, Team Vice-Captain, all team
        members and the Faculty Advisor agrees with the rules and regulations
        provided by the event organizing committee. They accept the event
        Rulebook as an official document and will obey all the guidelines and
        instructions provided in it. They declare that all the information
        provided in the registration documents, online forms, reports and
        presentations are true to the best of their knowledge. They accept that
        the team would complete all the activities related to the event without
        any external professional help, directly or indirectly. They understand
        that the rules do not tend to change throughout the event, but
        amendments to those rules will be made according to the circumstances.
        They accept that the event organising committee has the right to enforce
        or withdraw any rule related to the event if it concerns the good-will
        of the participating teams, event organising committee and the proper
        functioning of the event. They understand that the event organizing
        committee reserves the sole rights to reschedule the competition, alter
        the mode of presentation and interpret or modify the competition rules
        at any point of time and in any manner that is, in their sole judgment,
        required for the proper, smooth and efficient operation of the event.
        The Team Captain, Team vice-Captain, all team members and the Faculty
        Advisor are considered to be participating in the competition from the
        time they register at the event website till the declaration of the
        results after the conclusion of the competition. They will obey the Code
        of Conduct provided in the rulebook. They understand that the violation
        of rules, registration agreement, Code of Conduct and Rulebook will lead
        to disciplinary actions which include but not limited to penalizing,
        withdrawal of award and disqualification of the team at any stage of the
        event at the discretion of the organising committee.
      </p>
    </div>
  );
}

export default Terms;
