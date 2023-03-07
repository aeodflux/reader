export const TomePartCaption = ({ index }) => {
  switch (index) {
    case 2:
      return (
        <>
          <h3>Том второй</h3>
          <h4>Часть первая</h4>
        </>
      );

    case 30:
      return <h4>Часть вторая</h4>;
    case 51:
      return <h4>Часть третья</h4>;
    case 70:
      return (
        <>
          <h3>Том второй</h3>
          <h4>Часть первая</h4>
        </>
      );
    case 86:
      return <h4>Часть вторая</h4>;
    case 107:
      return <h4>Часть третья</h4>;
    case 133:
      return <h4>Часть четвертая</h4>;
    case 146:
      return <h4>Часть пятая</h4>;
    case 168:
      return (
        <>
          <h3>Том третий</h3>
          <h4>Часть первая</h4>
        </>
      );
    case 191:
      return <h4>Часть вторая</h4>;
    case 230:
      return <h4>Часть третья</h4>;
    case 264:
      return (
        <>
          <h3>Том четвертый</h3>
          <h4>Часть первая</h4>
        </>
      );
    case 280:
      return <h4>Часть вторая</h4>;
    case 299:
      return <h4>Часть третья</h4>;
    case 318:
      return <h4>Часть четвертая</h4>;
    case 338:
      return (
        <>
          <h3>Эпилог</h3>
          <h4>Часть первая</h4>
        </>
      );
    case 354:
      return <h4>Часть вторая</h4>;
    default:
      return null;
  }
};
