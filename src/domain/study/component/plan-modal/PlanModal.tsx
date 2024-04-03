export default function PlanModal() {
  return (
    <>
      <dialog id="plan_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl">계획 추가하기</h3>

          <hr className="border-transparent mb-4" />

          <div>
            <div className="flex items-center justify-center gap-2">
              <label className="flex-1 block text-sm font-bold">
                시작 시간
              </label>
              <input
                type="datetime-local"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <label className="flex-1 block text-sm font-bold">
                종료 시간
              </label>
              <input
                type="datetime-local"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          </div>

          <hr className="border-t-2 my-4" />

          <div className="flex items-center justify-center gap-2">
            <label className="flex-1 block text-sm font-bold">이 름</label>
            <input
              type="text"
              placeholder="계획을 입력하세요"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <label className="flex-1 block text-sm font-bold">카테고리</label>
            <select className="select select-sm select-bordered w-full max-w-xs">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>

          <hr className="border-t-2 my-4" />

          <div>
            <div className="flex items-center justify-center gap-2">
              <label className="flex-1 block text-sm font-bold">
                반복 옵션
              </label>
              <div className="w-full max-w-xs flex items-center justify-start">
                <input type="checkbox" className="toggle toggle-secondary" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <label className="label-text font-bold">매 주</label>
                  <input type="radio" name="radio-1" className="radio" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="label-text font-bold">매 달</label>
                  <input type="radio" name="radio-1" className="radio" />
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <label className="label-text font-bold">매 년</label>
                  <input type="radio" name="radio-1" className="radio" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 w-full max-w-xs">
                    <label className="flex-none block text-sm font-bold">
                      반복 횟수
                    </label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio flex-none"
                    />
                    <input
                      type="number"
                      min={0}
                      className="input input-bordered input-sm flex-1 text-center"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full max-w-xs">
                    <label className="flex-none block text-sm font-bold">
                      특정 날짜
                    </label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio flex-none"
                    />
                    <input
                      type="datetime-local"
                      className="input input-bordered input-sm flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t-2 my-4" />

          <div className="flex justify-center gap-2">
            <label className="flex-1 block text-sm font-bold">알림 설정</label>
            <div className="w-full max-w-xs flex flex-col justify-start">
              <div className="flex items-center gap-2">
                <input type="radio" name="radio-3" className="radio" />
                <label className="label-text font-bold">알림 없음</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="radio-3" className="radio" />
                <label className="label-text font-bold">10분 전</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="radio-3" className="radio" />
                <label className="label-text font-bold">1시간 전</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="radio-3" className="radio" />
                <label className="label-text font-bold">하루 전</label>
              </div>
            </div>
          </div>

          <hr className="border-transparent my-4" />

          <div>
            <button className="btn btn-success w-2/5 text-lg">등록</button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
