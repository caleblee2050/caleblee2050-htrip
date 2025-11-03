import { GoogleGenAI } from "@google/genai";

// API key is handled by the environment as per instructions.
// Ensure process.env.API_KEY is available in your environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateItinerary = async (people: string, duration: string, theme: string): Promise<string> => {
    const systemPrompt = `당신은 대한민국 강원도 홍천군의 체험학습 전문 기획자입니다. 당신이 활용할 수 있는 자원은 다음과 같습니다: 
1. '홍홍이' 커피 로스팅 및 드립백 만들기
2. 금 캐기 체험
3. 한옥 스테이 (전통/다문화 교육 연계)
4. 홍천향토사료관 및 생명건강과학관 견학
5. 홍천 9경 계절별 투어 (예: 여름 계곡, 가을 단풍)
6. 가리산 레포츠파크 (어드벤처 시설)
7. 동키마을 (동물 교감, 당나귀유 비누 만들기)
8. 서면 '농담' (전통 식혜 및 수제 맥주/샴푸 만들기).
또한, 검증된 로컬 식당 3곳과 펜션 3곳의 숙박 자원도 활용 가능합니다. 당신의 임무는 대안학교 학생들을 위한 실용적이고 매력적인 일정을 생성하는 것입니다. 일정은 시간대별로 상세하게 작성하고, 각 활동의 교육적 의미를 간략히 포함해야 합니다.`;

    const userQuery = `참여 인원 ${people}, 기간 ${duration}, 핵심 테마 '${theme}'에 맞춘 체험학습 일정을 생성해주세요.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [{ text: userQuery }] }],
            config: {
                 systemInstruction: { parts: [{ text: systemPrompt }] },
            }
        });
        return response.text;
    } catch (error) {
        console.error('Error generating itinerary:', error);
        if (error instanceof Error) {
            return `오류가 발생했습니다: ${error.message}. 잠시 후 다시 시도해주세요.`;
        }
        return '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    }
};
