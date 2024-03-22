import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/028.png" />

        <Title title="นาย สัญชัย รุ่งสว่าง (ฟลุ๊ค)">
          <h3>ตำแหน่ง : IT Support</h3>
        </Title>

        <Title title="ช่องทางติดต่อ">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/03/21").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66833859156
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202028@ssru.ac.th</p>
        </Title>
    
        <Title title="การศึกษา">
          <p>คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="โปรไฟล์">
          <p>ผมสนใจที่จะเรียนรู้งานและหาประสบการณ์เกี่ยวกับการ Software Tester โดยใช้ความสามารถด้านทางการทดสอบระบบที่มีและความพร้อมที่จะเรียนรู้ตลอดเวลาในการทำงานกับองค์กรนี้</p>
        </Title>

        <Title title="ประสบการณ์การทำงาน">
          <h3>ฟรีแลนซ์นักแปลอิสระที่ Thainovelกรุงเทพมหานคร - ประเทศไทย 2565 - 2567</h3>
          <p>-แปลนวนิยายจากชาวต่างชาติส่งให้กับทางเว็บไซต์</p>
          <p>-ตรวจพิสูจน์อักษร</p>
          <h3>ฟรีแลนซ์นักแปลอิสระที่ Mynovelกรุงเทพมหานคร - ประเทศไทย 2565 - 2567</h3>
          <p>-แปลนวนิยายจากชาวต่างชาติส่งให้กับทางเว็บไซต์</p>
          <p>-ตรวจพิสูจน์อักษร</p>
          <h3>ประชุมวิชาการระดับชาติ NCSTI 2024กรุงเทพมหานคร - ประเทศไทย 2567</h3>
          <p>-ลงแข่งขันทางวิชาการภายใต้หัวข้อ ‘วิทยาศาสตร์เทคโนลี และนวัตกรรม สู่การพัฒนาที่ยั่งยืน’ ได้ผ่านการพิจารณาการคัดเลือกภายใต้หัวข้อการวิจัย ‘Kibou School เกมออนไลน์สองมิติเพื่อส่งเสริมผลสัมฤทธิ์ด้านการเรียนการสอนรายวิชาสามัญ สำหรับชั้นมัธยมศึกษาตอนต้น’</p>


        </Title>

        <Title title="ทักษะ">
          <p>มีความเป็นผู้นำ และสามารถแก้ไขปัญหาเฉพาะหน้าได้เป็นอย่างดี</p>
          <p>สามารถเขียนเว็บด้วย Wordpress และการออกแบบเว็บไซต์ได้</p>
          <p>มีความสามารถในการเรียนรู้สิ่งใหม่ตลอดเวลา ๆ </p>
          <p>มีความมุ่งมั่นในการทำงาน</p>
          <p>Microsoft 365</p>
          <p>WordPress</p>
        </Title>
      </div>
    </main>
  )
}

export default App