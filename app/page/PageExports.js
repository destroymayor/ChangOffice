//本所簡介
import Introduction from "./Introduction/Introduction";
//本所轄區
import QurArea from "./Introduction/OurArea";
//位置交通
import LocationTraffic from "./Introduction/LocationTraffic";
//聯絡我們
import ContactUs from "./Introduction/ContactUs";
//辦公時間
import OfficeHours from "./Introduction/OfficeHours";
//各課業務
import EachClassBusiness from "./Introduction/EachClassBusiness";
//樓層介紹
import FloorPresentation from "./Introduction/FloorPresentation";
//FB粉絲專頁及Youtube影音頻道
import FBandYoutube from "./Introduction/FBandYoutube";
//最新消息
import latestNews from "./Introduction/latestNews";

//-----------------------//
//公告專區
import Proclamation from "./Proclamation/Proclamation";
//書狀補給
import BooklikeSupply from "./Proclamation/BooklikeSupply";
//建物第一次登記
import ConstructionFirstRegistration from "./Proclamation/ConstructionFirstRegistration";
//未辦繼承
import NotInherited from "./Proclamation/NotInherited";
//地籍清理等公告
import CadastralCleaning from "./Proclamation/CadastralCleaning";
//-----------------------//

//查詢專區
import QueryArea from "./QueryArea/QueryArea";
import CaseHandlingImagePage from "./QueryArea/CaseHandlingImagePage ";
import LandCharges from "./QueryArea/LandCharges";
import LandChargesPage from "./QueryArea/LandChargesPage";
//-----------------------//
//下載專區
import Downloads from "./Downloads/Downloads";
import ApplicationNote from "./Downloads/ApplicationNotes";
import ApplicationNoteList from "./Downloads/ApplicationNoteList";
import ServiceManual from "./Downloads/ServiceManual";
//-----------------------//
//試算專區
import TrialCalculation from "./TrialCalculation/TrialCalculation";
//-----------------------//
//線上申辦
import OnlineApplication from "./OnlineApplication/OnlineApplication";
//-----------------------//
//檔案應用
import FileApplication from "./FileApplication/FileApplication";
import Applicationandexample from "./FileApplication/Applicationandexample";
import ArchivesApplicationNotes from "./FileApplication/ArchivesApplicationNotes";
import Charges from "./FileApplication/Charges";
import JobflowChart from "./FileApplication/JobflowChart";

//-----------------------//
//實價登錄
import PricingLogin from "./PricingLogin/PricingLogin";
import DeclarationBook from "./PricingLogin/DeclarationBook";
//-----------------------//
//相關連結
import Relatedlink from "./Relatedlink/Relatedlinks";
import RelatedlinkArea from "./Relatedlink/page/Area";
import RelatedlinkChanghua from "./Relatedlink/page/Changhua";
import RelatedlinkGovernment from "./Relatedlink/page/Government";
import RelatedlinkAreaInsiders from "./Relatedlink/page/AreaInsider";

export default {
  Introduction: Introduction,
  QurArea: QurArea,
  LocationTraffic: LocationTraffic,
  OfficeHours: OfficeHours,
  ContactUs: ContactUs,
  EachClassBusiness: EachClassBusiness,
  FloorPresentation: FloorPresentation,
  FBandYoutube: FBandYoutube,
  latestNews: latestNews,

  //-------------------------//
  Proclamation: Proclamation,
  BooklikeSupply: BooklikeSupply,
  ConstructionFirstRegistration: ConstructionFirstRegistration,
  NotInherited: NotInherited,
  CadastralCleaning: CadastralCleaning,
  //-------------------------//
  QueryArea: QueryArea,
  CaseHandlingImagePage: CaseHandlingImagePage,
  LandCharges: LandCharges,
  LandChargesPage: LandChargesPage,
  //////
  Downloads: Downloads,
  ApplicationNote: ApplicationNote,
  ApplicationNoteList: ApplicationNoteList,
  ServiceManual: ServiceManual,
  ///////
  TrialCalculation: TrialCalculation,
  OnlineApplication: OnlineApplication,
  FileApplication: FileApplication,
  Applicationandexample: Applicationandexample,
  ArchivesApplicationNotes: ArchivesApplicationNotes,
  Charges: Charges,
  JobflowChart: JobflowChart,
  PricingLogin: PricingLogin,
  DeclarationBook: DeclarationBook,
  Relatedlink: Relatedlink,
  RelatedlinkArea: RelatedlinkArea,
  RelatedlinkChanghua: RelatedlinkChanghua,
  RelatedlinkGovernment: RelatedlinkGovernment,
  RelatedlinkAreaInsiders: RelatedlinkAreaInsiders
};
