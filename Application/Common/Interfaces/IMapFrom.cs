using AutoMapper;

namespace Application.Common.Interfaces
{
    class IMapFrom<T>
    {
        void Mapping(Profile profile) => profile.CreateMap(typeof(T), GetType());
    }
}
