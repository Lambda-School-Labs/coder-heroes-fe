import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/badges.less';
import { Layout } from 'antd';
import FeedbackBadge from './FeedbackBadge';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getBadgesById,
  getBadges,
} from '../../../redux/actions/classroomActions';
//TO-DO: Implement Auth0

const { Content } = Layout;
const FeedbackBadgesPage = props => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  // const { idToken } = authState;
  const { course } = props;

=======
  //TO-DO: Implement Auth0
  // const { authState } = useOktaAuth();
  // const { idToken } = authState;
  const { course } = props;

  //TO-DO: Implement Auth0
>>>>>>> d80a9bb (Added To-do and commented out mentions of OktaAuth, idToken, and authState from the files)
  // //TO-DO: Implement Auth0
  // useEffect(() => {
  // //   dispatch(getBadgesById(idToken, course.currentStudentId));
  // //   dispatch(getBadges(idToken));
  // // }, []);

<<<<<<< HEAD
=======
  //TO-DO: Implement Auth0
>>>>>>> d80a9bb (Added To-do and commented out mentions of OktaAuth, idToken, and authState from the files)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatch(getBadgesById(idToken, course.currentStudentId));
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, [course.badge_request]);

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="classroom__students">
            {course.badges.map(badge => (
              <FeedbackBadge
                badge={badge}
                key={badge.badge_id}
                studentBadges={course.studentBadges}
              />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    course: state.classroomReducer,
  };
};

export default connect(mapStateToProps, { getBadgesById, getBadges })(
  FeedbackBadgesPage
);
