import type { HoleContent } from './types';

export const NUM_HOLES = 12;

export const GAME_DURATION = 60;

export const MIN_SPEED = 1000;
export const MAX_SPEED = 2000;

export const GOOD_TARGETS = [
	{ text: 'สารานุกรม Wikipedia', emoji: '📚' },
	{ text: 'เว็บโรงเรียน', emoji: '🏫' },
	{ text: 'งานวิจัยวิทยาศาสตร์', emoji: '🔬' },
	{ text: 'ข่าวตรวจสอบแล้ว', emoji: '📰' },
	{ text: 'ข้อมูลราชการ', emoji: '🏛️' }
] as const satisfies HoleContent[];

export const BAD_TARGETS = [
	{ text: 'รับ iPhone ฟรี!', emoji: '🤑' },
	{ text: 'เครื่องติดไวรัส!', emoji: '👾' },
	{ text: 'ลด 20 โล ใน 1 วัน', emoji: '💊' },
	{ text: 'ข่าวมั่ว: เอเลี่ยนบุก', emoji: '🤡' },
	{ text: 'ลงทุน 100 ได้ 1 ล้าน', emoji: '💸' },
	{ text: 'คลิกรับเงินฟรี', emoji: '🎣' }
] as const satisfies HoleContent[];
