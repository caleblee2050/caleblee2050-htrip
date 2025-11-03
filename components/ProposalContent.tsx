import React, { useState } from 'react';
import { CoffeeIcon, HomeIcon, ShovelIcon, SpinnerIcon, MuseumIcon, MountainIcon, RollerCoasterIcon, AnimalIcon, BeerIcon, TractorIcon, SkiIcon } from './icons';
import { generateItinerary } from '../services/geminiService';

const ProposalContent: React.FC = () => {
    const [people, setPeople] = useState('10명');
    const [duration, setDuration] = useState('1박 2일');
    const [theme, setTheme] = useState('힐링과 팀워크');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');

    const handleGenerate = async () => {
        setIsLoading(true);
        setResult('');
        const generatedText = await generateItinerary(people, duration, theme);
        setResult(generatedText);
        setIsLoading(false);
    };

    return (
        <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">강원도 홍천에서 만나는 특별한 체험학습</h2>
            <p className="text-lg text-gray-600 mb-6">서울시 대안학교 연합(서대협)을 위한 맞춤형 프로그램을 제안합니다.</p>

            <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 rounded-xl shadow-lg mb-6">
                <h3 className="text-2xl font-bold mb-2">왜 홍천인가요?</h3>
                <p>
                    단순한 여행이 아닌, 맑은 자연 속에서 공동체와 교감하는 '진짜 배움'의 시간을 선물합니다.
                    저희는 여행사가 아닌, 지역과 함께 상생하는 홍천의 '로컬 교육 파트너'입니다.
                    학교의 목적과 예산에 맞춰 가장 의미 있는 시간을 디자인해 드립니다.
                </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">핵심 프로그램 하이라이트</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CoffeeIcon className="text-yellow-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">커피 로스팅 & 드립백 만들기</h4>
                    <p className="text-sm text-gray-600">'홍홍이'에서 직접 생두를 볶고, 나만의 시그니처 드립백을 만들며 오감을 깨우는 시간.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <ShovelIcon className="text-green-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">금 캐기 체험</h4>
                    <p className="text-sm text-gray-600">홍천의 맑은 물가에서 즐기는 이색 체험. 팀워크와 성취감을 동시에 느낄 수 있습니다.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <HomeIcon className="text-blue-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">한옥 스테이 & 전통 교육</h4>
                    <p className="text-sm text-gray-600">고즈넉한 한옥에서의 하룻밤. 다문화 교육, 전통 예절 교육 등 맞춤형 교육 진행이 가능합니다.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <TractorIcon className="text-green-600 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">로컬체험 프로그램</h4>
                    <p className="text-sm text-gray-600">생산자 만나기, 농업기술센터 견학, 1~6차 산업 간접 체험하기를 통한 지역 농업의 이해.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">더 다양해진 체험 활동</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                 <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <MuseumIcon className="text-indigo-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">박물관/과학관 견학</h4>
                    <p className="text-sm text-gray-600">홍천향토사료관과 생명건강과학관을 연계하여 지역의 역사와 미래 과학 기술을 함께 탐방합니다.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <MountainIcon className="text-cyan-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">홍천 9경 돌아보기</h4>
                    <p className="text-sm text-gray-600">계절에 따라 가장 아름다운 홍천의 명소를 둘러봅니다. (여름 계곡, 가을 단풍 코스 등)</p>
                </div>
                 <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <RollerCoasterIcon className="text-rose-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">가리산 레포츠파크</h4>
                    <p className="text-sm text-gray-600">스릴 넘치는 어드벤처 시설에서 팀워크를 다지고 스트레스를 해소하는 동적인 활동입니다. (<a href="https://xn--o39a51u89ajxoq6r2hdn3ff1b.com/program/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">홈페이지</a>)</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <AnimalIcon className="text-lime-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">동키마을 체험</h4>
                    <p className="text-sm text-gray-600">동물과의 교감을 통해 생명의 소중함을 배우고, 당나귀 우유로 아토피에 좋은 비누를 만듭니다.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <BeerIcon className="text-amber-700 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">전통 식혜/맥주 만들기</h4>
                    <p className="text-sm text-gray-600">서면 '농담'에서 발효의 원리를 배우고, 직접 만든 식혜와 응용 샴푸는 가져가고, 맥주는 학교로 배송됩니다.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <SkiIcon className="text-blue-600 mb-2 h-8 w-8" />
                    <h4 className="font-bold text-lg">대명 비발디 리조트</h4>
                    <p className="text-sm text-gray-600">사계절 즐길 수 있는 스키, 오션월드, 루지 체험. 동적인 레포츠 활동으로 에너지를 발산하는 시간입니다.</p>
                </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">학교를 위한 맞춤형 진행 방식</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-blue-800 mb-2">Option 1. 올인원(All-in-One) 패키지</h4>
                    <p className="text-gray-700"><strong>"예산과 목표만 알려주세요. 나머지는 저희가 다 알아서 할게요!"</strong></p>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                        <li>학교 담당자님의 행정 부담을 0으로 줄여드립니다.</li>
                        <li>숙박, 식사, 체험, 강사까지 모든 일정을 총괄 기획하고 진행합니다.</li>
                        <li>예산에 맞춘 최적의 프로그램으로 구성합니다.</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-green-800 mb-2">Option 2. 맞춤형 코디네이팅</h4>
                    <p className="text-gray-700"><strong>"필요한 것만 쏙쏙! 유연하게 구성하고 싶어요."</strong></p>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                        <li>검증된 숙소, 식당 등 필요한 부분만 연결해 드립니다.</li>
                        <li>'커피 체험' 등 저희 핵심 프로그램만 별도 진행 가능합니다.</li>
                        <li>학교가 직접 각 업체와 소통하고 계약하는 방식입니다.</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">✨ AI 맞춤 일정 생성기</h3>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-inner">
                <p className="text-gray-600 mb-4">원하는 인원, 기간, 테마를 입력하시면 Gemini AI가 맞춤형 일정 초안을 생성해 드립니다.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="ai-people" className="block text-sm font-medium text-gray-700">참여 인원 (예: 10명)</label>
                        <input type="text" id="ai-people" value={people} onChange={(e) => setPeople(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="ai-duration" className="block text-sm font-medium text-gray-700">기간 (예: 1박 2일)</label>
                        <input type="text" id="ai-duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="ai-theme" className="block text-sm font-medium text-gray-700">핵심 테마 (예: 힐링, 팀워크)</label>
                        <input type="text" id="ai-theme" value={theme} onChange={(e) => setTheme(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                    </div>
                </div>
                <button onClick={handleGenerate} disabled={isLoading} className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md disabled:opacity-50 flex items-center justify-center">
                    {isLoading ? (
                        <>
                            <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            <span>생성 중...</span>
                        </>
                    ) : (
                        <span>✨ 일정 생성하기</span>
                    )}
                </button>
                {result && (
                    <div className="mt-6 p-4 bg-white rounded-md border border-gray-200 text-gray-700 text-sm whitespace-pre-line">
                        {result}
                    </div>
                )}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">샘플 일정표 (1박 2일 예시)</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">구분</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 일정</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">비고</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td rowSpan={4} className="px-6 py-4 whitespace-nowrap font-bold text-blue-700 align-top">1일차</td>
                            <td className="px-6 py-4">오전: 서울 출발 및 홍천 도착</td>
                            <td className="px-6 py-4 text-sm text-gray-500"></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">12:00 - 13:00 : 점심 식사 (지역 맛집)</td>
                            <td className="px-6 py-4 text-sm text-gray-500">지역 연계 식당</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">14:00 - 16:00 : 체험 활동 (택 1: 금 캐기)</td>
                            <td className="px-6 py-4 text-sm text-gray-500">이색 체험</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">17:00 - : 숙소 체크인 (한옥 펜션) 및 저녁 식사, 자유시간</td>
                            <td className="px-6 py-4 text-sm text-gray-500">공동체 프로그램 가능</td>
                        </tr>
                        <tr>
                            <td rowSpan={4} className="px-6 py-4 whitespace-nowrap font-bold text-green-700 align-top">2일차</td>
                            <td className="px-6 py-4">09:00 - 10:00 : 아침 식사 및 산책</td>
                            <td className="px-6 py-4 text-sm text-gray-500"></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">10:30 - 12:00 : '홍홍이' 커피 체험</td>
                            <td className="px-6 py-4 text-sm text-gray-500">로스팅 & 드립백 만들기</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">12:00 - 13:00 : 점심 식사</td>
                            <td className="px-6 py-4 text-sm text-gray-500"></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">14:00 - : 서울로 출발</td>
                            <td className="px-6 py-4 text-sm text-gray-500"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">* 위 일정은 예시이며, 학교의 목적(힐링, 교육, 팀빌딩 등)과 예산에 따라 자유롭게 변경 가능합니다.</p>
            
            <div className="mt-10 text-center bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">귀교의 다음 체험학습을 가장 의미 있는 시간으로 만들어 드리겠습니다.<br />자세한 내용은 현장에서 문의해 주세요.</h3>
                <a href="https://www.notion.so/2a022558a74f8067b7f4fafc67535396?pvs=106" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    지금 바로 신청하기
                </a>
            </div>
        </div>
    );
};

export default ProposalContent;
