interface PlanColumn {
  name: string;
  icon?: string;
  iconAlt?: string;
  highlightColor?: string;
  downloadUrl: string;
  buttonText: string;
  isPrimary?: boolean;
}

interface Feature {
  name: string;
  isNew?: boolean;
  free: string | boolean | null; // null = "—", true = checkmark icon, string = text
  standard: string | boolean | null;
  pro: string | boolean | null;
  isLastInGroup?: boolean; // 是否是分组的最后一行（增加底部间距）
}

interface PlanTableProps {
  mainTitle: string;
  plans: PlanColumn[];
  features: Feature[];
  checkIconUrl?: string;
  checkIconAlt?: string;
  emptySymbol?: string;
  headerSectionTitle?: string;
}

export default function PlanTable({
  mainTitle,
  plans,
  features,
  checkIconUrl = "/images/table/sure-only-icon.svg",
  checkIconAlt = "sure icon",
  emptySymbol = "—",
  headerSectionTitle = "Hot & Popular Features"
}: PlanTableProps) {
  const renderCellContent = (value: string | boolean | null) => {
    if (value === null) {
      return <span className="text-[#999999] text-center font-bold">{emptySymbol}</span>;
    }
    if (value === true) {
      return (
        <img 
          width="24" 
          height="24" 
          className="inline-block" 
          src={checkIconUrl} 
          alt={checkIconAlt}
        />
      );
    }
    return <span className="text-sm lg:text-base text-center">{value}</span>;
  };

  return (
    <section className="bg-white">
      <div className="container max-w-[1310px] mx-auto px-4 py-10 lg:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl lg:text-4xl lg:leading-[3rem] font-bold text-[#353535]">
          {mainTitle}
        </h2>

        {/* 对比表格 */}
        <div className="mt-10 bg-white rounded-2xl shadow-[0_16px_81px_-57px_rgba(71,71,71,0.38)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-center">
              {/* 表头 */}
              <thead>
                <tr>
                  <th className="w-[40%] py-[18px] rounded-tl-2xl border-b border-r border-[#F7F7F7]"></th>
                  {plans.map((plan, index) => (
                    <th 
                      key={index}
                      className={`${
                        index === plans.length - 1 
                          ? 'w-[22%] rounded-tr-2xl pr-0 xl:pr-10' 
                          : 'w-[18.75%] border-r border-[#F7F7F7]'
                      } py-[18px] ${index < plans.length - 1 ? 'border-b' : ''}`}
                    >
                      {plan.icon ? (
                        <div className="flex items-center justify-center">
                          <img 
                            width="30" 
                            height="30" 
                            src={plan.icon} 
                            alt={plan.iconAlt || `${plan.name} icon`}
                          />
                          <p 
                            className="text-xl lg:text-2xl font-bold ml-2"
                            style={{ color: plan.highlightColor || '#4EACEA' }}
                          >
                            {plan.name}
                          </p>
                        </div>
                      ) : (
                        <span className="text-base lg:text-xl text-[#404040] font-bold">
                          {plan.name}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* 表格主体 */}
              <tbody className="text-left text-[#292929]">
                {/* 热门功能行 */}
                <tr>
                  <td className="border-r border-[#F7F7F7] text-lg lg:text-2xl font-bold pl-5 lg:pl-[70px] py-3">
                    {headerSectionTitle}
                  </td>
                  {plans.map((plan, index) => (
                    <td 
                      key={index}
                      className={`py-3 ${index < plans.length - 1 ? 'border-r border-[#F7F7F7]' : 'xl:pr-10'}`}
                    >
                      <a 
                        href={plan.downloadUrl}
                        target="_blank"
                        className={`mx-auto w-32 md:w-36 lg:w-[180px] h-11 lg:h-12 border border-[#4EACEA] flex justify-center items-center rounded-full transition-colors ${
                          plan.isPrimary
                            ? 'bg-[#4EACEA] hover:bg-transparent text-white hover:text-[#4EACEA]'
                            : 'text-[#4EACEA] hover:text-white hover:bg-[#4EACEA]'
                        }`}
                      >
                        <svg width="24" height="24" className="overflow-hidden">
                          <use href="/images/svg/common.svg#mac"></use>
                        </svg>
                        <span className="flex flex-col ml-2">
                          <b className="text-sm lg:text-base font-bold">{plan.buttonText}</b>
                        </span>
                      </a>
                    </td>
                  ))}
                </tr>

                {/* 功能行 */}
                {features.map((feature, index) => (
                  <tr key={index}>
                    <td className={`border-r border-[#F7F7F7] p-5 lg:pl-[70px] ${feature.isLastInGroup ? 'pb-5 lg:pb-[60px]' : ''}`}>
                      <div className="flex items-start">
                        <span className="text-sm lg:text-base">{feature.name}</span>
                        {feature.isNew && (
                          <span className="inline-block ml-1.5 -mt-2.5 text-[#4EACEA] text-[10px] leading-3 border border-[#4EACEA] rounded-full rounded-bl-none px-2 py-0.5">
                            New
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`border-r border-[#F7F7F7] text-center ${feature.isLastInGroup ? 'py-5 lg:pb-[60px]' : ''}`}>
                      {renderCellContent(feature.free)}
                    </td>
                    <td className={`border-r border-[#F7F7F7] text-center ${feature.isLastInGroup ? 'py-5 lg:pb-[60px]' : ''}`}>
                      {renderCellContent(feature.standard)}
                    </td>
                    <td className={`text-center ${feature.isLastInGroup ? 'py-5 lg:pb-[60px]' : ''}`}>
                      {renderCellContent(feature.pro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
