import { FC } from "react";

interface PopUpDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  detail: any;
}

const PopUpDetail: FC<PopUpDetailProps> = ({ isOpen, closeModal, detail }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative min-w-[500px] my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">Detail Data</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <img src="/images/login.svg" alt="detail" />
                  <div className="text-[20px]">
                    Nama Merchant: {detail.name_merchant}
                  </div>
                  <div className="text-[20px]">
                    Nama RM: {detail.profile.profile[0].fullname}
                  </div>
                  <div className="flex gap-2 text-[20px]">
                    <div>Klik disini untuk</div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${detail.lat},${detail.lng}&query_place_id=${detail.lat},${detail.lng}&pin_location=${detail.lat},${detail.lng}`}
                      target={"_blank"}
                      className="text-blue-800"
                    >
                      Kunjungi lokasi
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export { PopUpDetail };
