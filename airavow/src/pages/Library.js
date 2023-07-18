import React from "react";
import Custom from "./Custom";
import image1 from "../assets/library1.jpeg";
import image2 from "../assets/library2.jpeg";
import image3 from "../assets/digital-classroom.jpeg";
import image4 from "../assets/activityroom.webp";

const Library = () => {
  return (
    <div>
      <Custom text="School Library" title1="School Campus" title="Library" />
      <div className="container-fluid pt-5" style={{backgroundColor:'#ffff7726'}}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-12 col-md-8">
            <h4 className="text-bolder" style={{ color: "darkblue" }}>
              <u>Library</u>
            </h4>
            <p className="fifth-text-color mt-4">
              The school has a well-furnished library and reading room. A wide
              range of books for various age groups along with Encyclopedia,
              reference books, journals, News Papers and Periodicals will be
              made available for reading and use. The library contains nearly
              5000 books of various subjects which are used by both students and
              teachers. Apart from it, the institution gets monthly periodicals
              and magazines to enhance the knowledge of teachers and students.
            </p>

            <div className="row mt-5">
              <div className="col-6">
                <img src={image1} style={{ width: "100%", height: "250px" }} />
              </div>
              <div className="col-6">
                <img src={image2} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Library </u>Rules
            </h4>
            <p className="fifth-text-color">
              The school has well equipped laboratories to carry out
              experimental work in various sciences. <br />
              The following rules are to be followed in the laboratories:
            </p>

            <ol
              className="fifth-text-color"
              style={{ marginLeft: "-2%", textAlign: "justify" }}
              type="A"
            >
              <li>Students of the school are members of the library.</li>
              <li>Discipline in the library must be maintained at all cost.</li>
              <li>Only one book can be borrowed at a time.</li>
              <li>
                Books can be issued and returned only in the library period of
                the concerned class.
              </li>
              <li>
                Books should be properly looked after and returned on its due
                date.
              </li>
              <li>
                If a book is lost or destroyed the cost of the book with fine
                will be recovered from the student.
              </li>
              <li>
                Students are allowed to borrow books for a period of 10 days. No
                dues certificate is to be obtained from the librarian while
                leaving the school.
              </li>
            </ol>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Digital </u>Classroom
            </h4>
            <p className="fifth-text-color mt-3">
              B.G.P.C.S. provides a classroom environment that fosters
              excellence and motivates students towards better performance. Our
              classrooms are aesthetically designed and integrated with smart
              boards and well-furnished desks. With technological support, our
              skilled teachers provide guidance to each individual. The emphasis
              is on making every classroom session interesting and interactive.
            </p>
            <div className="row mt-4">
              <div className="col-12 col-md-6">
                <img src={image3} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Activity </u>Room
            </h4>
            <p className="fifth-text-color mt-3">
              The Activity Rooms at B.G.P.C.S. are magical jukeboxes that spur
              every student into action. Equipped with a wide range of
              performing arts, our spacious activity rooms are fit for every
              session - be it dance, music or yoga. The very idea of introducing
              activity rooms is to nurture the inner potential of every student,
              to give wings to their creativity and to enhance their learning
              skills. Activity rooms play a big role in strengthening the roots
              of talent in every student.
            </p>
            <div className="row mt-4">
              <div className="col-12 col-md-6">
                <img src={image4} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Medical </u>Room
            </h4>
            <p className="fifth-text-color mt-3 mb-5">
              B.G.P.C.S. accommodates a well-equipped and well-furnished medical
              room, which is accessible during school hours. We have nursing
              attendants in place for ensuring that all the emergencies are
              taken care of. We also have a tie-up with the hospital to address
              medical exigencies right on time. We conduct regular awareness
              programs for assisting students about various aspects of health
              education (diseases), first aid, healthy habits, diet management
              and stress management along with sessions of yoga and meditation.
              In addition to the awareness sessions, routine medical checkups
              are also conducted every year to keep a check on health issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
