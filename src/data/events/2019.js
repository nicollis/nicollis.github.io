import { MLProject, WebProject } from '../../models/projects'
import Web from "../../models/projects/Web";

export default [
    new MLProject({
       title: 'What is new in Core ML 3',
       detail: 'WWDC 19 had some amazing updates, here is what you can expect in the new Core ML 3',
       date: 'June 12 2019',
       link:'https://www.bignerdranch.com/blog/whats-new-in-core-ml/',
       tech: ['CoreML'],
       eventType: 'blog'
    }),
    new MLProject({
        title: 'Computer Vision Training',
        detail: '3 month training program from Udacity on Computer Vision',
        date: 'May 30 2019',
        link: '/Udacity-Computer-Vision-Nanodegree-Syllabus.pdf',
        tech: ['PyTorch', 'CV', 'NLP', 'OpenCV']
    }),
    new MLProject({
        title: 'Graph SLAM',
        detail: 'implement SLAM (Simultaneous Localization and Mapping) for a 2 dimensional world',
        date: 'May 28 2019',
        link: 'https://github.com/nicollis/Graph-SLAM',
        tech: ['Python', 'Robotics']
    }),
    new MLProject({
        title: 'Image Captioning',
        detail: 'CNN->RNN(LSTM) model to build captions for images',
        date: 'April 19 2019',
        link: 'https://github.com/nicollis/Image-Captioning',
        tech: ['Pytorch', 'CV', 'NLP']
    }),
    new MLProject({
        title: 'Facial Keypoints',
        detail: 'Pytorch model expermenting with edge detection and CNN architectures.',
        date: 'April 9 2019',
        link: 'https://github.com/nicollis/facial-keypoints/',
        tech: ['Pytorch', 'OpenCV', 'CV']
    }),
    new Web({
        title: 'Web Accessibility',
        detail: 'Talk given at Indy.RB about the importance and how to make your site accessible',
        date: 'March 16 2019',
        link: 'https://www.youtube.com/watch?v=mElNXIjLdDw',
        tech: ['Accessibility'],
        eventType: 'video',
        react: false,
        redux: false,
    }),
    new MLProject({
        title: 'TensorFlow Dev Summit 2019',
        detail: 'TensorFlow kicked off their 3rd annual summit last week with a lot of new developments and releases.',
        date: 'March 11 2019',
        link: 'https://www.bignerdranch.com/blog/tensorflow-developer-summit-2019/',
        tech: ['TensorFlow', 'Keras'],
        eventType: 'blog'
    }),
    new WebProject({
        title: 'Keyboard Navigation and VoiceOver',
        detail: 'In this screencast, you\'ll get your feet wet in accessibility and learn how to move around a website using only your keyboard with VoiceOver enabled.',
        date: 'March 4 2019',
        link: 'https://thefrontier.bignerdranch.com/screencasts/keyboard-navigation-and-voice-over?utm_source=The+Frontier&utm_campaign=db958096e8-EMAIL_CAMPAIGN_2019_04_12_01_56&utm_medium=email&utm_term=0_6419bfba7e-db958096e8-334157357&mc_cid=db958096e8&mc_eid=77166b2463',
        tech: ['VoiceOver', 'Accessibility'],
        eventType: 'video',
        react: false,
        redux: false,
    }),
    new MLProject({
        title: 'macOS Machine Learning in 2019',
        detail: 'As we start 2019, let\'s review what machine learning on macOS looks like now and how it might improve.',
        date: 'Januaray 17 2019',
        link: 'https://www.bignerdranch.com/blog/macos-machine-learning-in-2019/',
        tech: ['PlaidML', 'Keras'],
        eventType: 'blog'
    }),
    new MLProject({
        title: 'Digit Recognizer',
        detail: 'Solutions to Kaggle\'s MNSIT computer vision problem scoring in the top 12%',
        date: 'Januaray 10 2019',
        link: 'https://github.com/nicollis/Digit-Recognizer',
        tech: ['PlaidML', 'Scikit-Learn', 'CV']
    }),

]
