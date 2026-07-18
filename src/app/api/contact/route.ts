import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    const plan = formData.get("plan") as string;
    const message = formData.get("message") as string;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "닉네임과 연락처는 필수입니다." },
        { status: 400 }
      );
    }

    console.log("=== 새로운 상담 신청 ===");
    console.log(`닉네임: ${name}`);
    console.log(`연락처: ${contact}`);
    console.log(`상품: ${plan}`);
    console.log(`내용: ${message}`);
    console.log("========================");

    return NextResponse.json({
      success: true,
      message: "상담 신청이 완료되었습니다. 빠른 시간 내에 연락드리겠습니다!",
    });
  } catch {
    return NextResponse.json(
      { error: "처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
