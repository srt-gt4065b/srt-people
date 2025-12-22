#!/bin/bash

echo "================================================"
echo "   SRT 회원 DB - 개발 환경 실행 가이드"
echo "================================================"
echo ""
echo "[1] 처음 설치하기"
echo "[2] 개발 서버 실행하기"
echo "[3] 빌드하기"
echo "[4] GitHub에 배포하기"
echo "[5] 종료"
echo ""
read -p "선택하세요 (1-5): " choice

case $choice in
  1)
    echo ""
    echo "=== 패키지 설치 중... ==="
    echo ""
    npm install
    echo ""
    echo "설치 완료! 이제 ./실행하기.sh 를 다시 실행하여 [2]번을 선택하세요."
    ;;
  2)
    echo ""
    echo "=== 개발 서버 실행 중... ==="
    echo ""
    echo "브라우저에서 http://localhost:5173 을 여세요"
    echo "종료하려면 Ctrl+C 를 누르세요"
    echo ""
    npm run dev
    ;;
  3)
    echo ""
    echo "=== 프로젝트 빌드 중... ==="
    echo ""
    npm run build
    echo ""
    echo "빌드 완료! dist 폴더가 생성되었습니다."
    ;;
  4)
    echo ""
    echo "=== GitHub Pages에 배포 중... ==="
    echo ""
    echo "주의: vite.config.js에서 base 경로를 확인하세요!"
    echo ""
    npm run deploy
    echo ""
    echo "배포 완료! 1-2분 후 GitHub Pages에서 확인하세요."
    ;;
  5)
    echo ""
    echo "프로그램을 종료합니다."
    exit 0
    ;;
  *)
    echo "잘못된 선택입니다."
    ;;
esac
