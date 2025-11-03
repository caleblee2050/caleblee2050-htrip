
import React from 'react';
import { AlertTriangleIcon } from './icons';

const InternalContent: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">프로젝트 회의록 분석 (내부용)</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">1. 프로젝트 목표</h3>
                    <p className="text-gray-700">
                        서울시 대안학교(서대협)에 배정된 체험학습 예산을 활용, 홍천 지역의 자원(숙박, 식당, 체험 프로그램)과 연계하여 지속 가능한 사업 모델 구축.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">2. 핵심 사업 모델</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <h4 className="font-bold text-lg text-blue-800">모델 A: '컨트랙트 베이스' (Turnkey)</h4>
                            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                                <li><strong>내용:</strong> 학교로부터 총 예산(ex: 1,000만원)을 받아, 2박 3일 일정의 모든 것(숙식, 프로그램, 강사)을 우리가 기획하고 진행.</li>
                                <li><strong>수익:</strong> 총 예산 내에서 마진을 남기는 형태.</li>
                                <li><strong>장점:</strong> 학교 측 행정 간소화, 높은 수익 잠재력.</li>
                                <li><strong>단점:</strong> 교육청의 '여행사' 통 계약 제재 가능성. '턴키' 계약에 대한 학교의 거부감.</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-bold text-lg text-green-800">모델 B: '코디네이터 베이스' (Commission)</h4>
                            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                                <li><strong>내용:</strong> 우리는 일정 코디네이터 역할. 숙소, 식당, 체험처를 '소개'하고, 학교가 각 업체와 '개별' 계약.</li>
                                <li><strong>수익:</strong>
                                    <ol className="list-decimal list-inside ml-4">
                                        <li>연계 업체로부터 받는 수수료 (Back-margin).</li>
                                        <li>'홍홍이' 커피 체험 등 우리 자체 프로그램을 강사비/체험비로 청구.</li>
                                    </ol>
                                </li>
                                <li><strong>장점:</strong> 교육청 규제 회피 가능, 유연한 제안.</li>
                                <li><strong>단점:</strong> 수익 구조가 분산됨, 학교 측이 개별 업체와 '네고' 시도 시 수익성 악화 우려.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">3. 우리가 가진 핵심 자원 (홍천)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>체험 프로그램:</strong> '홍홍이' 커피 체험 (로스팅, 드립백), 금 캐기 체험</li>
                        <li><strong>숙박 연계:</strong> 3곳 (한옥 펜션 포함 - 전통/다문화 교육 연계 가능)</li>
                        <li><strong>식당 연계:</strong> 3곳 (패밀리십, 검증된 곳)</li>
                        <li><strong>네트워크:</strong> 해밀학교 등 지역 교육 기관과의 연계</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">4. 타겟 시장 분석 (서대협)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>규모:</strong> 70%가 10명 내외의 소규모 학교.</li>
                        <li><strong>예산:</strong> 9월경 예산이 교부되어 연말까지 소진해야 하는 '긴급성' 존재. (ex: 7명이 1200만원 사용)</li>
                        <li><strong>특징:</strong> 인가 학교(해밀 등)는 규제에 민감하나, 비인가 학교 연합은 상대적으로 유연함.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">5. To-Do List (11/6 미팅 전)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>제안서 작성:</strong> 학교의 목적(ex: 힐링, 교육, 팀빌딩)에 맞춘 4~5가지 맞춤형 프로그램 제안서 초안 작성.</li>
                        <li><strong>샘플 일정표:</strong> 1박 2일, 2박 3일 기준 샘플 일정표 구체화.</li>
                        <li><strong>홍보 물품:</strong> '홍홍이' 커피 드립백 등 체험학습 홍보용 물품 준비.</li>
                        <li><strong>수익 모델 확정:</strong> 연계 업체(숙박, 식당)과의 수수료(커미션) 정책 내부 확정.</li>
                    </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-2 flex items-center">
                        <AlertTriangleIcon className="mr-2 h-6 w-6" />
                        주요 고려사항 및 리스크
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>인건비 vs 예산:</strong> 학교는 '예산'은 있으나 '인력(인건비)'이 없음. 우리의 '코디네T이팅' 및 '강사' 역할이 핵심 소구점.</li>
                        <li><strong>페이백(리턴) 요구:</strong> 일부 학교에서 예산 집행 후 리턴을 요구할 가능성. 이에 대한 명확한 내부 방침 필요 (ex: '적립금' 형태 제안).</li>
                        <li><strong>정산의 투명성:</strong> 학교는 모든 비용에 대한 세부 내역을 요구할 것. (모델 A, B 모두 해당)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InternalContent;
