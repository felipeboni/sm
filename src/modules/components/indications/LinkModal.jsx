import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modal = (isOpen) => {
  const [open, setOpen] = useState(isOpen);
  const link = "http://suaurl.com";

  const handleCopyToClipboard = (evt) => {
    navigator.clipboard.writeText(link);
    evt.target.blur();

    toast.success("Seu link foi copiado!");
  };

  const handleShare = async () => {
    try {
      if (navigator.canShare)
        await navigator.share({
          text: 'Venha conhecer meu app! Use meu link:',
          url: link,
        });
    } catch (error) {
      console.log("Sharing failed!", error);
    }
  };

  useEffect(() => {
    if (isOpen) setOpen(isOpen)
  }, [isOpen])

  return (
    <>
      {open && (
        <>
          <dialog
            open
            className="fixed z-[999] bg-white rounded-lg border border-black/10 max-w-[90%] p-6 grid gap-4 h-fit"
          >
            <div className="grid gap-2 text-center">
              <h1 className="text-xl font-semibold">Aqui está seu link!</h1>
              <span className="max-w-xs px-8 text-sm font-semibold text-black/50">
                Compartilhe com seus amigos e ganhe dinheiro juntos!
              </span>
            </div>
            <div className="grid gap-2">
              <input
                type="text"
                value={link}
                className="w-full p-4 border rounded-lg bg-offwhite border-black/10"
                onClick={(evt) => handleCopyToClipboard(evt)}
              />

              <button
                className="w-full p-4 font-medium text-white border rounded-lg bg-primary-500"
                onClick={() => handleShare()}
              >
                Compartilhar
              </button>
            </div>
          </dialog>
          <span className="fixed top-0 bottom-0 left-0 right-0 bg-white/50 z-[998]" />
        </>
      )}

      <Toaster position="bottom-center" />
    </>
  );
};

export { Modal };
