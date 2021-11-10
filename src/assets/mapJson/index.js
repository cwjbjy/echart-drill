import anhui from "./provinceJson/anhui";
import aomen from "./provinceJson/aomen";
import beijing from "./provinceJson/beijing";
import chongqing from "./provinceJson/chongqing";
import fujian from "./provinceJson/fujian";
import gansu from "./provinceJson/gansu";
import guangdong from "./provinceJson/guangdong";
import guangxi from "./provinceJson/guangxi";
import guizhou from "./provinceJson/guizhou";
import hainan from "./provinceJson/hainan";
import hebei from "./provinceJson/hebei";
import heilongjiang from "./provinceJson/heilongjiang";
import henan from "./provinceJson/henan";
import hubei from "./provinceJson/hubei";
import hunan from "./provinceJson/hunan";
import jiangsu from "./provinceJson/jiangsu";
import jiangxi from "./provinceJson/jiangxi";
import jilin from "./provinceJson/jilin";
import liaoning from "./provinceJson/liaoning";
import neimenggu from "./provinceJson/neimenggu";
import ningxia from "./provinceJson/ningxia";
import qinghai from "./provinceJson/qinghai";
import shandong from "./provinceJson/shandong";
import shanghai from "./provinceJson/shanghai";
import shanxi from "./provinceJson/shanxi";
import shanxi1 from "./provinceJson/shanxi1";
import sichuan from "./provinceJson/sichuan.js";
import tianjin from "./provinceJson/tianjin";
import xianggang from "./provinceJson/xianggang";
import xinjiang from "./provinceJson/xinjiang";
import xizang from "./provinceJson/xizang";
import yunnan from "./provinceJson/yunnan";
import zhejiang from "./provinceJson/zhejiang";
import taiwan from "./provinceJson/taiwan";
import china from "./china";

const areaMap = [
  {
    name: "中国",
    enName: "china",
    value: china,
    code: "",
  },
  {
    name: "安徽省",
    enName: "anhui",
    value: anhui,
    code: "340000",
  },
  {
    name: "北京市",
    enName: "beijing",
    value: beijing,
    code: "110000",
  },
  {
    name: "福建省",
    enName: "fujian",
    value: fujian,
    code: "350000",
  },
  {
    name: "甘肃省",
    enName: "gansu",
    value: gansu,
    code: "620000",
  },
  {
    name: "广东省",
    enName: "guangdong",
    value: guangdong,
    code: "440000",
  },
  {
    name: "广西壮族自治区",
    enName: "guangxi",
    value: guangxi,
    code: "450000",
  },
  {
    name: "贵州省",
    enName: "guizhou",
    value: guizhou,
    code: "520000",
  },
  {
    name: "海南省",
    enName: "hainan",
    value: hainan,
    code: "460000",
  },
  {
    name: "河北省",
    enName: "hebei",
    value: hebei,
    code: "130000",
  },
  {
    name: "河南省",
    enName: "henan",
    value: henan,
    code: "410000",
  },
  {
    name: "黑龙江省",
    enName: "heilongjiang",
    value: heilongjiang,
    code: "230000",
  },
  {
    name: "湖北省",
    enName: "hubei",
    value: hubei,
    code: "420000",
  },
  {
    name: "湖南省",
    enName: "hunan",
    value: hunan,
    code: "430000",
  },
  {
    name: "吉林省",
    enName: "jilin",
    value: jilin,
    code: "220000",
  },
  {
    name: "江苏省",
    enName: "jiangsu",
    value: jiangsu,
    code: "320000",
  },
  {
    name: "江西省",
    enName: "jiangxi",
    value: jiangxi,
    code: "360000",
  },
  {
    name: "辽宁省",
    enName: "liaoning",
    value: liaoning,
    code: "210000",
  },
  {
    name: "内蒙古自治区",
    enName: "neimenggu",
    value: neimenggu,
    code: "150000",
  },
  {
    name: "宁夏回族自治区",
    enName: "ningxia",
    value: ningxia,
    code: "640000",
  },
  {
    name: "青海省",
    enName: "qinghai",
    value: qinghai,
    code: "630000",
  },
  {
    name: "山东省",
    enName: "shandong",
    value: shandong,
    code: "370000",
  },
  {
    name: "山西省",
    enName: "shanxi",
    value: shanxi,
    code: "140000",
  },
  {
    name: "陕西省",
    enName: "shanxi1",
    value: shanxi1,
    code: "610000",
  },
  {
    name: "上海市",
    enName: "shanghai",
    value: shanghai,
    code: "310000",
  },
  {
    name: "四川省",
    enName: "sichuan",
    value: sichuan,
    code: "510000",
  },
  {
    name: "天津市",
    enName: "tianjin",
    value: tianjin,
    code: "120000",
  },
  {
    name: "西藏自治区",
    enName: "xizang",
    value: xizang,
    code: "540000",
  },
  {
    name: "新疆维吾尔自治区",
    enName: "xinjiang",
    value: xinjiang,
    code: "650000",
  },
  {
    name: "云南省",
    enName: "yunnan",
    value: yunnan,
    code: "530000",
  },
  {
    name: "浙江省",
    enName: "zhejiang",
    value: zhejiang,
    code: "330000",
  },
  {
    name: "重庆市",
    enName: "chongqing",
    value: chongqing,
    code: "500000",
  },
  {
    name: "香港",
    enName: "xianggang",
    value: xianggang,
    code: "810000",
  },
  {
    name: "澳门",
    enName: "aomen",
    value: aomen,
    code: "820000",
  },
  {
    name: "台湾",
    enName: "taiwan",
    value: taiwan,
    code: "710000",
  },
];

/* 根据名称找GeoJson数据 */
export const getJson = (area) =>
  areaMap?.find((d) => d.name === area || d.enName === area || d.code === area)
    ?.value || china;

/* 根据名称找对应code */
export const getCode = (area) =>
  areaMap?.find((d) => d.name === area || d.enName === area)?.code || "";
